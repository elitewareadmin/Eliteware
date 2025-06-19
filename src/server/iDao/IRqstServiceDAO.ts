import type { RqstServiceEntity } from "../../entity/RqstServiceEntity";

export interface IRqsrServiceDAO {
  save(entity: RqstServiceEntity): Promise<boolean | null>;
}
