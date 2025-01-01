import {PixelGrid} from "./models/pixel-grid.class.ts";
import {Pos} from "./models/pos.class.ts";

Bun.serve({
    port: 9002,
    fetch(req, server) {
        // upgrade the request to a WebSocket
        if (server.upgrade(req)) {
            return; // do not return a Response
        }
        return new Response("Upgrade failed", {status: 500});
    },
    websocket: {
        message(ws, message) {
            let msg = message.toString();
            if (msg.startsWith("radar")) {

                const coords = msg.split(';').slice(1).map((coordString: string) => coordString.split(',').map((coord => +coord)))
                console.log(msg.split(';'))
                console.log(coords)

                const X = 100
                const Y = 99

                const center = new Pos(-464, 205);

                const a = new PixelGrid(X, Y);

                for (let i = 1; i <= 4; i++) {
                    a.drawCircle(new Pos(X / 2, Y / 2), 10 * i)
                }
                a.drawCrosshair();


                console.log('weewah')
                ws.send(JSON.stringify(a.convertToPixelSectionGrid().convertToSymbolGrid()))
            }
        },
        open(ws) {
            console.log('new connection!!')
        }
    }
})
