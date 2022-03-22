// This file is generated by the corba.js IDL compiler from 'RTC.idl'.

import * as valuetype from "./RTC_valuetype"

export namespace RTC {

    export enum ReturnCode_t {
        RTC_OK,
        RTC_ERROR,
        BAD_PARAMETER,
        UNSUPPORTED,
        OUT_OF_RESOURCES,
        PRECONDITION_NOT_MET,
    }

    export enum LifeCycleState {
        CREATED_STATE,
        INACTIVE_STATE,
        ACTIVE_STATE,
        ERROR_STATE,
    }

    export enum ExecutionKind {
        PERIODIC,
        EVENT_DRIVEN,
        OTHER,
    }

    export enum PortInterfacePolarity {
        PROVIDED,
        REQUIRED,
    }

    export interface PortInterfaceProfile {
        instance_name: string
        type_name: string
        polarity: RTC.PortInterfacePolarity
    }

export interface LightweightRTObject extends ComponentAction {
    initialize(): Promise<RTC.ReturnCode_t>
    finalize(): Promise<RTC.ReturnCode_t>
    is_alive(exec_context: RTC.ExecutionContext): Promise<boolean>
    exit(): Promise<RTC.ReturnCode_t>
    attach_context(exec_context: RTC.ExecutionContext): Promise<number>
    detach_context(exec_handle: number): Promise<RTC.ReturnCode_t>
    get_context(exec_handle: number): Promise<RTC.ExecutionContext>
    get_owned_contexts(): Promise<Array<RTC.ExecutionContext>>
    get_participating_contexts(): Promise<Array<RTC.ExecutionContext>>
    get_context_handle(cxt: RTC.ExecutionContext): Promise<number>
}

export interface ComponentAction {
    on_initialize(): Promise<RTC.ReturnCode_t>
    on_finalize(): Promise<RTC.ReturnCode_t>
    on_startup(exec_handle: number): Promise<RTC.ReturnCode_t>
    on_shutdown(exec_handle: number): Promise<RTC.ReturnCode_t>
    on_activated(exec_handle: number): Promise<RTC.ReturnCode_t>
    on_deactivated(exec_handle: number): Promise<RTC.ReturnCode_t>
    on_aborting(exec_handle: number): Promise<RTC.ReturnCode_t>
    on_error(exec_handle: number): Promise<RTC.ReturnCode_t>
    on_reset(exec_handle: number): Promise<RTC.ReturnCode_t>
}

export interface DataFlowComponentAction {
    on_execute(exec_handle: number): Promise<RTC.ReturnCode_t>
    on_state_update(exec_handle: number): Promise<RTC.ReturnCode_t>
    on_rate_changed(exec_handle: number): Promise<RTC.ReturnCode_t>
}

export interface DataFlowComponent extends DataFlowComponentAction, LightweightRTObject {
}

export interface Fsm extends LightweightRTObject {
}

export interface FsmParticipantAction {
    on_action(exec_handle: number): Promise<RTC.ReturnCode_t>
}

export interface FsmParticipant extends FsmParticipantAction, LightweightRTObject {
}


export interface RTObject extends LightweightRTObject {
    get_component_profile(): Promise<valuetype.RTC.ComponentProfile>
    get_ports(): Promise<Array<RTC.PortService>>
}

export interface DataFlowComponent_aist extends DataFlowComponent, RTObject {
}

export interface ExecutionContext {
    is_running(): Promise<boolean>
    start(): Promise<RTC.ReturnCode_t>
    stop(): Promise<RTC.ReturnCode_t>
    get_rate(): Promise<number>
    set_rate(rate: number): Promise<RTC.ReturnCode_t>
    add_component(comp: RTC.LightweightRTObject): Promise<RTC.ReturnCode_t>
    remove_component(comp: RTC.LightweightRTObject): Promise<RTC.ReturnCode_t>
    activate_component(comp: RTC.LightweightRTObject): Promise<RTC.ReturnCode_t>
    deactivate_component(comp: RTC.LightweightRTObject): Promise<RTC.ReturnCode_t>
    reset_component(comp: RTC.LightweightRTObject): Promise<RTC.ReturnCode_t>
    get_component_state(comp: RTC.LightweightRTObject): Promise<RTC.LifeCycleState>
    get_kind(): Promise<RTC.ExecutionKind>
}

export interface PortService {
    get_port_profile(): Promise<valuetype.RTC.PortProfile>
    get_connector_profiles(): Promise<Array<valuetype.RTC.ConnectorProfile>>
    get_connector_profile(connector_id: string): Promise<valuetype.RTC.ConnectorProfile>
    connect(connector_profile: valuetype.RTC.ConnectorProfile): Promise<RTC.ReturnCode_t>
    disconnect(connector_id: string): Promise<RTC.ReturnCode_t>
    disconnect_all(): Promise<RTC.ReturnCode_t>
    notify_connect(connector_profile: valuetype.RTC.ConnectorProfile): Promise<RTC.ReturnCode_t>
    notify_disconnect(connector_id: string): Promise<RTC.ReturnCode_t>
}

export interface ExecutionContextService extends ExecutionContext {
    get_profile(): Promise<valuetype.RTC.ExecutionContextProfile>
}

} // namespace RTC
