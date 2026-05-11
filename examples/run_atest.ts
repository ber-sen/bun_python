import { python } from "..";
// import path from "node:path";

const { step } = python.runModule(`
import asyncio

async def step(name):
    print("test")

    await asyncio.sleep(1)

    return {
        "message": f"greet {name}",
        "length": len(name)
    }
`);

// await Bun.file(path.resolve(import.meta.dir, "test.py")).text(),
// "test.py",

const interval = setInterval(() => {
  console.log("run");
}, 100);

const loopDone = python.run_loop();

try {
  const res = await step("world");

  console.log(res.get("message"));
} finally {
  python.stop_loop();
  await loopDone;
  clearInterval(interval);
}
