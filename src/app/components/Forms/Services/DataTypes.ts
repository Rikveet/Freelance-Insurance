import {ServiceSubmitData} from "@/app/components/Forms/DataTypes";

export type props = {exit: { (): void }, onSubmit: {(data: ServiceSubmitData): Promise<boolean>}}