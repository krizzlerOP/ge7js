const PASSWORD = "krizzlerop"; // GitHub se change kar sakta hai

(async () => {
    let userPassword = prompt("Enter password:");
    
    if (userPassword !== PASSWORD) {
        alert("❌ Wrong Password! Access Denied.");
        return;
    }

    console.log("✅ Password Correct! Auto Tap Activated.");

    window.autoTap = setInterval(() => {
        let button = document.querySelector('div._tapArea_njdmz_15');
        if (button) {
            button.click();
        }
    }, 100); // 10 taps per second

    async function checkEnergy() {
        while (true) {
            let energyElement = document.querySelector('div._label_15n79_25');
            let energy = energyElement ? parseInt(energyElement.textContent.split('/')[0]) : 0;

            if (energy < 50) {
                console.log(`⚠️ Low energy (${energy}), stopping taps...`);
                clearInterval(window.autoTap);
                return;
            }
            await new Promise(res => setTimeout(res, 3000));
        }
    }

    checkEnergy();
})();
