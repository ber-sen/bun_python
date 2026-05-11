import { python } from "..";

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

const interval = setInterval(() => {
  console.log("run");
}, 100);

const loopDone = python.run_loop();

try {
  const res = await step("world");

  console.log(res.message);
} finally {
  python.stop_loop();
  await loopDone;
  clearInterval(interval);
}
