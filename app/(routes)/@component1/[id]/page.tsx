import { sleep } from 'radash';

export default async function Component1() {
  await sleep(2000);

  return <h1>Component 1</h1>;
}
