import asyncio

async def step(name):
    print("test")
    
    await asyncio.sleep(1)
    
    return {
        "message": f"greet {name}",
        "length": len(name)
    }

def run_step(name):
    return asyncio.run(step(name))
