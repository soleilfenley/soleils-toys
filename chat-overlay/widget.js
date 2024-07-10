/**
 * slime2:ready event
 * fired once, when the slime2 global variable is ready to use
 */
addEventListener("slime2:ready", () => {
        // only necessary if you need it to connect to Twitch
        slime2.widget.loadPlatform("twitch");

        // name of data file where users saved their settings, along with the setting definitions
        slime2.widget.loadSettings("widget-data.js", [
                {
                        label: "Text Input",
                        id: "text",
                        type: "text-input",
                },
        ]);

        // main event handler
        slime2.onEvent((event) => {
                if (event.type === "message") {
                        const messageClone = $(
                                slime2.cloneTemplate("message-template"),
                        );
                        messageClone.find(".message").text(event.message.text);
                        return { fragment: messageClone };
                }
        });
});

/**
 * slime2:widget-data-update event
 * fired every time a widget setting is changed (including on initial load)
 * use this to update the widget live, rather than the user having to refresh
 */
addEventListener("slime2:widget-data-update", () => {
        // slime2.widget.getData() will always fetch the latest widget data,
        // defined by the settings you loaded
        const data = slime2.widget.getData();

        // do something with the latest widget settings data
});
