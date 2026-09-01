exports.handler = async (input) => {
    try {
        return {
            success: true,
            message: "Function executed successfully",
            name: input.name || "",
            conversationId: input.conversationId || "",
            testValue: input.testValue || ""
        };

    } catch (error) {
        return {
            success: false,
            message: "Function execution failed",
            error: error.message || "Unknown error"
        };
    }
};

exports.handler = async (input) => {
    try {
        console.log("Received input:", JSON.stringify(input));

        return {
            success: true,
            message: "Function executed successfully",
            name: input?.name || "",
            conversationId: input?.conversationId || "",
            testValue: input?.testValue || "",
            error: ""
        };

    } catch (error) {
        console.error("Function error:", error);

        return {
            success: false,
            message: "Function execution failed",
            name: "",
            conversationId: "",
            testValue: "",
            error: error.message || "Unknown error"
        };
    }
};

Compress-Archive -Path .\index.js -DestinationPath .\function.zip -Force
Compress-Archive -Path .\index.js,.\main.js,.\jwt.js,.\cobrowse.js,.\package.json,.\package-lock.json,.\private-key.pem,.\node_modules -DestinationPath .\function.zip -Force
Get-ChildItem -Path . -Exclude function.zip | Compress-Archive -DestinationPath .\function.zip -Force
tar -tf .\function.zip


==================================
main.js

async function main(input) {

    console.log(
        "Starting JWT/Cobrowse processing"
    );

    const conversationId = input?.conversationId;

    if (!conversationId) {
        throw new Error("conversationId is required");
    }

    // Your existing JWT code
    const token = await generateJwt();

    // Your existing Cobrowse API code
    const cobrowseResponse = await getCobrowseData(
        conversationId,
        token
    );

    return cobrowseResponse;
}


// Keep your existing functions here
async function generateJwt() {
    // Your existing working JWT code
}


async function getCobrowseData(conversationId, token) {
    // Your existing working Cobrowse API code
}


module.exports = {
    main
};

=================================================
index.js

const { main } = require("./main");

exports.handler = async (input) => {

    try {

        console.log("Input:", JSON.stringify(input));

        const response = await main(input);

        return {
            success: true,
            message: "JWT and Cobrowse API executed successfully",
            conversationId: input?.conversationId || "",
            data: response,
            error: ""
        };

    } catch (error) {

        console.error("Error:", error);

        return {
            success: false,
            message: "JWT/Cobrowse execution failed",
            conversationId: input?.conversationId || "",
            data: null,
            error: error.message || "Unknown error"
        };
    }
};
============================================

