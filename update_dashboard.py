import shutil
import os
import time

SOURCE = os.path.expanduser("~/signals")
DESTINATION = os.path.expanduser("~/godo-ai/assets/data")

FILES = [
    "signal_statistics.json",
    "trade_statistics.json",
    "active_signals.json",
    "active_trades.json",
    "latest_signals.json",
    "latest_prices.json",
    "engine_status.json"
]

while True:

#    print("\n===================================")
#    print("🚀 Updating GODO AI Dashboard")
#    print("===================================")

    for file in FILES:

        source_file = os.path.join(SOURCE, file)
        destination_file = os.path.join(DESTINATION, file)

        if os.path.exists(source_file):

            shutil.copy2(source_file, destination_file)
            print(f"✅ {file}")

        else:

            print(f"❌ Missing : {file}")

#    print("📡 Dashboard Updated")
#    print("⏳ Waiting 5 Seconds...")

    time.sleep(5)
