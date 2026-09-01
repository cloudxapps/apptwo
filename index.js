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
