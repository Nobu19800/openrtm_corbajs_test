import * as openrtmTest from "./openrtmTest.js"

main()

export async function main() {
  openrtmTest.exit_component("ws://127.0.0.1:2809/ws", "test.host_cxt/ConsoleOut0.rtc")
}