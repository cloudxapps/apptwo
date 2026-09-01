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
