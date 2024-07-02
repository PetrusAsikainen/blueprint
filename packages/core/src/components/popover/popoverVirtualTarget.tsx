/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { VirtualElement } from "@popperjs/core";

import { AbstractPureComponent, DISPLAYNAME_PREFIX } from "../../common";

export interface PopoverVirtualTargetProps {
    virtualTarget: VirtualElement;
}

export class PopoverVirtualTarget extends AbstractPureComponent<PopoverVirtualTargetProps> implements VirtualElement {
    public static displayName = `${DISPLAYNAME_PREFIX}.PopoverVirtualTarget`;

    public render() {
        // This is a purely virtual element that only exists for Popper <Reference> compatibility.
        return null;
    }

    public getBoundingClientRect() {
        return this.props.virtualTarget.getBoundingClientRect();
    }

    public get contextElement() {
        return this.props.virtualTarget.contextElement;
    }
}
