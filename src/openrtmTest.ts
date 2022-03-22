import { ORB, GIOPDecoder } from 'corba.js'
import { NamingContextExtStub } from 'corba.js'
//import { WsProtocol } from "corba.js/net/ws"
import { WsProtocol } from "corba.js/net/browser"
import * as skel from "./example_echo_skel.js"
import * as stub from "./example_echo_stub.js"
import * as RTC_skel from "./RTC_skel.js"
import * as RTC_stub from "./RTC_stub.js"
import * as RTC_interface from "./RTC.js"
import * as RTC_value from "./RTC_value.js"
import * as RTC_valuetype from "./RTC_valuetype.js"

//let print = console.log
let print = alert


export class NameValue implements RTC_value.RTC.NameValue {
    name!: string
    value!: any
    constructor(decoder: GIOPDecoder){
        RTC_value.RTC.initNameValue(this, decoder)
    }
}

export function initNameValue(decoder: GIOPDecoder) {
    return new NameValue(decoder)
}


export class PortProfile implements RTC_value.RTC.PortProfile {
    name!: string
    interfaces!: Array<RTC_value.RTC.PortInterfaceProfile>
    port_ref!: RTC_interface.RTC.PortService
    connector_profiles!: Array<RTC_value.RTC.ConnectorProfile>
    owner!: RTC_interface.RTC.RTObject
    properties!: Array<RTC_value.RTC.NameValue>
    constructor(decoder: GIOPDecoder){
        RTC_value.RTC.initPortProfile(this, decoder)
    }
}

export function initPortProfile(decoder: GIOPDecoder) {
    return new PortProfile(decoder)
}

export class ComponentProfile implements RTC_value.RTC.ComponentProfile {
    instance_name!: string
    type_name!: string
    description!: string
    version!: string
    vendor!: string
    category!: string
    port_profiles!: Array<RTC_value.RTC.PortProfile>
    parent!: RTC_interface.RTC.RTObject
    properties!: Array<RTC_value.RTC.NameValue>
    constructor(decoder: GIOPDecoder){
        RTC_value.RTC.initComponentProfile(this, decoder)
    }
}

export function initComponentProfile(decoder: GIOPDecoder) {
    return new ComponentProfile(decoder)
}

export async function exit_component(address: string, rtcpath: string) {
    let orb = new ORB()


    orb.registerStubClass(RTC_stub.RTC.LightweightRTObject)
    orb.registerStubClass(RTC_stub.RTC.ComponentAction)
    orb.registerStubClass(RTC_stub.RTC.DataFlowComponentAction)
    orb.registerStubClass(RTC_stub.RTC.DataFlowComponent)
    orb.registerStubClass(RTC_stub.RTC.LightweightRTObject)
    orb.registerStubClass(RTC_stub.RTC.FsmParticipantAction)
    orb.registerStubClass(RTC_stub.RTC.FsmParticipant)
    orb.registerStubClass(RTC_stub.RTC.RTObject)
    orb.registerStubClass(RTC_stub.RTC.ExecutionContext)
    orb.registerStubClass(RTC_stub.RTC.PortService)
    orb.registerStubClass(RTC_stub.RTC.ExecutionContextService)
    orb.registerStubClass(RTC_stub.RTC.DataFlowComponent_aist)


    ORB.registerValueType("omg.org/RTC/ComponentProfile", initComponentProfile)
    ORB.registerValueType("omg.org/RTC/PortProfile", initPortProfile)
    ORB.registerValueType("omg.org/RTC/NameValue", initNameValue)

    orb.addProtocol(new WsProtocol())

    await orb.stringToObject(address+"#NameService").then(
      (nameobject: any) => {
        let rootContext = NamingContextExtStub.narrow(nameobject)

        rootContext.resolve_str(rtcpath).then(
          (reference: any) => {
            orb.getConnection(reference.host, reference.port, reference.pathname).then(
              (objectConnection: any) => {
                let rtc = new RTC_stub.RTC.RTObject(objectConnection.orb, reference.objectKey, objectConnection);

                rtc.exit().then(
                  (ret: RTC_interface.RTC.ReturnCode_t) => {
                  if(ret === RTC_interface.RTC.ReturnCode_t.RTC_OK)
                  {
                    print("RTC termination process has completed successfully.")
                  }
                  else
                  {
                    print("error code:"+ret)
                  }
                  
                }).catch(
                  (reason: any) => {
                    print(reason);
                })
            }).catch(
              (reason: any) => {
              print(reason);
            })
        }).catch(
          (reason: any) => {
          print(reason);
        })
    }).catch(
      (reason: any) => {
      print(reason);
    })


}