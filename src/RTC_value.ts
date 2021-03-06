// This file is generated by the corba.js IDL compiler from 'RTC.idl'.

import { ORB, GIOPDecoder, GIOPEncoder } from 'corba.js'
import * as _interface from "./RTC"
export namespace RTC {

    export interface NameValue {
        name: string
    }
    export function initNameValue(object: NameValue, init?: Partial<NameValue> | GIOPDecoder) {
        if (init instanceof GIOPDecoder) {
            const decoder = init
            object.name = decoder.string()
        } else {
            object.name = (init === undefined || init.name === undefined) ? "" : init.name
        }
    }
    export function encodeNameValue(encoder: GIOPEncoder, obj: NameValue) {
        encoder.string(obj.name)
    }

    export interface PortInterfaceProfile {
        instance_name: string
        type_name: string
        polarity: _interface.RTC.PortInterfacePolarity
    }
    export function initPortInterfaceProfile(object: PortInterfaceProfile, init?: Partial<PortInterfaceProfile> | GIOPDecoder) {
        if (init instanceof GIOPDecoder) {
            const decoder = init
            object.instance_name = decoder.string()
            object.type_name = decoder.string()
            object.polarity = decoder.ulong()
        } else {
            object.instance_name = (init === undefined || init.instance_name === undefined) ? "" : init.instance_name
            object.type_name = (init === undefined || init.type_name === undefined) ? "" : init.type_name
            const vtpolarity = ORB.lookupValueType("_interface.RTC.PortInterfacePolarity")
            object.polarity = vtpolarity.prototype.isPrototypeOf(init?.polarity) ? init!.polarity : new (vtpolarity)(init?.polarity)
        }
    }
    export function encodePortInterfaceProfile(encoder: GIOPEncoder, obj: PortInterfaceProfile) {
        encoder.string(obj.instance_name)
        encoder.string(obj.type_name)
        encoder.ulong(obj.polarity)
    }

    export interface ConnectorProfile {
        name: string
        connector_id: string
        ports: Array<_interface.RTC.PortService>
        properties: Array<RTC.NameValue>
    }
    export function initConnectorProfile(object: ConnectorProfile, init?: Partial<ConnectorProfile> | GIOPDecoder) {
        if (init instanceof GIOPDecoder) {
            const decoder = init
            object.name = decoder.string()
            object.connector_id = decoder.string()
            object.ports = decoder.sequence(() => decoder.object())
            object.properties = decoder.sequence(() => decoder.value("NameValue"))
        } else {
            object.name = (init === undefined || init.name === undefined) ? "" : init.name
            object.connector_id = (init === undefined || init.connector_id === undefined) ? "" : init.connector_id
            object.ports = init?.ports instanceof Array ? init!.ports : []
            object.properties = init?.properties instanceof Array ? init!.properties : []
        }
    }
    export function encodeConnectorProfile(encoder: GIOPEncoder, obj: ConnectorProfile) {
        encoder.string(obj.name)
        encoder.string(obj.connector_id)
        encoder.sequence(obj.ports, (item) => encoder.object(item))
        encoder.sequence(obj.properties, (item) => encoder.value(item))
    }

    export interface PortProfile {
        name: string
        interfaces: Array<RTC.PortInterfaceProfile>
        port_ref: _interface.RTC.PortService
        connector_profiles: Array<RTC.ConnectorProfile>
        owner: _interface.RTC.RTObject
        properties: Array<RTC.NameValue>
    }
    export function initPortProfile(object: PortProfile, init?: Partial<PortProfile> | GIOPDecoder) {
        if (init instanceof GIOPDecoder) {
            const decoder = init
            object.name = decoder.string()
            object.interfaces = decoder.sequence(() => decoder.value("omg.org/RTC/PortInterfaceProfile"))
            object.port_ref = decoder.object()
            object.connector_profiles = decoder.sequence(() => decoder.value("omg.org/RTC/ConnectorProfile"))
            object.owner = decoder.object()
            object.properties = decoder.sequence(() => decoder.value("omg.org/RTC/NameValue"))
        } else {
            object.name = (init === undefined || init.name === undefined) ? "" : init.name
            object.interfaces = init?.interfaces instanceof Array ? init!.interfaces : []
            const vtport_ref = ORB.lookupValueType("_interface.RTC.PortService")
            object.port_ref = vtport_ref.prototype.isPrototypeOf(init?.port_ref) ? init!.port_ref : new (vtport_ref)(init?.port_ref)
            object.connector_profiles = init?.connector_profiles instanceof Array ? init!.connector_profiles : []
            const vtowner = ORB.lookupValueType("_interface.RTC.RTObject")
            object.owner = vtowner.prototype.isPrototypeOf(init?.owner) ? init!.owner : new (vtowner)(init?.owner)
            object.properties = init?.properties instanceof Array ? init!.properties : []
        }
    }
    export function encodePortProfile(encoder: GIOPEncoder, obj: PortProfile) {
        encoder.string(obj.name)
        encoder.sequence(obj.interfaces, (item) => encoder.value(item))
        encoder.object(obj.port_ref)
        encoder.sequence(obj.connector_profiles, (item) => encoder.value(item))
        encoder.object(obj.owner)
        encoder.sequence(obj.properties, (item) => encoder.value(item))
    }

    export interface ComponentProfile {
        instance_name: string
        type_name: string
        description: string
        version: string
        vendor: string
        category: string
        port_profiles: Array<RTC.PortProfile>
        parent: _interface.RTC.RTObject
        properties: Array<RTC.NameValue>
    }
    export function initComponentProfile(object: ComponentProfile, init?: Partial<ComponentProfile> | GIOPDecoder) {
        if (init instanceof GIOPDecoder) {
            const decoder = init
            object.instance_name = decoder.string()
            object.type_name = decoder.string()
            object.description = decoder.string()
            object.version = decoder.string()
            object.vendor = decoder.string()
            object.category = decoder.string()
            object.port_profiles = decoder.sequence(() => decoder.value("omg.org/RTC/PortProfile"))
            object.parent = decoder.object()
            object.properties = decoder.sequence(() => decoder.value("omg.org/RTC/NameValue"))
        } else {
            object.instance_name = (init === undefined || init.instance_name === undefined) ? "" : init.instance_name
            object.type_name = (init === undefined || init.type_name === undefined) ? "" : init.type_name
            object.description = (init === undefined || init.description === undefined) ? "" : init.description
            object.version = (init === undefined || init.version === undefined) ? "" : init.version
            object.vendor = (init === undefined || init.vendor === undefined) ? "" : init.vendor
            object.category = (init === undefined || init.category === undefined) ? "" : init.category
            object.port_profiles = init?.port_profiles instanceof Array ? init!.port_profiles : []
            const vtparent = ORB.lookupValueType("_interface.RTC.RTObject")
            object.parent = vtparent.prototype.isPrototypeOf(init?.parent) ? init!.parent : new (vtparent)(init?.parent)
            object.properties = init?.properties instanceof Array ? init!.properties : []
        }
    }
    export function encodeComponentProfile(encoder: GIOPEncoder, obj: ComponentProfile) {
        encoder.string(obj.instance_name)
        encoder.string(obj.type_name)
        encoder.string(obj.description)
        encoder.string(obj.version)
        encoder.string(obj.vendor)
        encoder.string(obj.category)
        encoder.sequence(obj.port_profiles, (item) => encoder.value(item))
        encoder.object(obj.parent)
        encoder.sequence(obj.properties, (item) => encoder.value(item))
    }

    export interface ExecutionContextProfile {
        kind: _interface.RTC.ExecutionKind
        rate: number
        owner: _interface.RTC.RTObject
        participants: Array<_interface.RTC.RTObject>
        properties: Array<RTC.NameValue>
    }
    export function initExecutionContextProfile(object: ExecutionContextProfile, init?: Partial<ExecutionContextProfile> | GIOPDecoder) {
        if (init instanceof GIOPDecoder) {
            const decoder = init
            object.kind = decoder.ulong()
            object.rate = decoder.double()
            object.owner = decoder.object()
            object.participants = decoder.sequence(() => decoder.object())
            object.properties = decoder.sequence(() => decoder.value("NameValue"))
        } else {
            const vtkind = ORB.lookupValueType("_interface.RTC.ExecutionKind")
            object.kind = vtkind.prototype.isPrototypeOf(init?.kind) ? init!.kind : new (vtkind)(init?.kind)
            object.rate = (init === undefined || init.rate === undefined) ? 0 : init.rate
            const vtowner = ORB.lookupValueType("_interface.RTC.RTObject")
            object.owner = vtowner.prototype.isPrototypeOf(init?.owner) ? init!.owner : new (vtowner)(init?.owner)
            object.participants = init?.participants instanceof Array ? init!.participants : []
            object.properties = init?.properties instanceof Array ? init!.properties : []
        }
    }
    export function encodeExecutionContextProfile(encoder: GIOPEncoder, obj: ExecutionContextProfile) {
        encoder.ulong(obj.kind)
        encoder.double(obj.rate)
        encoder.object(obj.owner)
        encoder.sequence(obj.participants, (item) => encoder.object(item))
        encoder.sequence(obj.properties, (item) => encoder.value(item))
    }

} // namespace RTC

let initialized = false
export function _init() {
    if (initialized)
        return
    initialized = true
    ORB.valueTypeByName.set("omg.org/RTC/NameValue", {attributes:["name"],encode:RTC.encodeNameValue})
    ORB.valueTypeByName.set("omg.org/RTC/PortInterfaceProfile", {attributes:["instance_name", "type_name", "polarity"],encode:RTC.encodePortInterfaceProfile})
    ORB.valueTypeByName.set("omg.org/RTC/ConnectorProfile", {attributes:["name", "connector_id", "ports", "properties"],encode:RTC.encodeConnectorProfile})
    ORB.valueTypeByName.set("omg.org/RTC/PortProfile", {attributes:["name", "interfaces", "port_ref", "connector_profiles", "owner", "properties"],encode:RTC.encodePortProfile})
    ORB.valueTypeByName.set("omg.org/RTC/ComponentProfile", {attributes:["instance_name", "type_name", "description", "version", "vendor", "category", "port_profiles", "parent", "properties"],encode:RTC.encodeComponentProfile})
    ORB.valueTypeByName.set("omg.org/RTC/ExecutionContextProfile", {attributes:["kind", "rate", "owner", "participants", "properties"],encode:RTC.encodeExecutionContextProfile})
}
_init()
