
async function exp() {
    try {
        const promise = await new Promise((res, rej) => {
            let x = 0;
            if (x == 0) {
                res("success");
            } else {
                rej("error");
            }
        });
        console.log(promise);
    } catch (error) {
        console.log("seen",error);
    }
}

exp();
