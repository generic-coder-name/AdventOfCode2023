import { writable } from "svelte/store";

export const data = writable<{ name: string; tally: number }[]>([]);

export async function getData(): Promise<void> {
  const localData = localStorage.getItem("day1.json");
  if (!localData) {
    data.set(await (await fetch("/data/day1.json")).json());
    localStorage.setItem("day1.json", JSON.stringify(data));
    return;
  }
  data.set(JSON.parse(localData));
}

export async function setData(name: string, tally: number): Promise<void> {
  data.update((value) => {
    const edit = value.find(({ name: actualName }) => {
      return name == actualName;
    });
    if (edit) {
      edit.tally = tally;
    }

    return value;
  });

  data.subscribe((data) =>
    localStorage.setItem("day1.json", JSON.stringify(data))
  );
}
