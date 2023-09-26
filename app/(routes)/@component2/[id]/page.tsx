import { sleep } from 'radash';

export default async function Component2() {
  await sleep(2000);

  return <h1>Component 2</h1>;
}
