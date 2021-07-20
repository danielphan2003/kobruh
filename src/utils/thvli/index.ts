import api from "../api";

export const THVLI_DOMAIN = "https://api.thvli.vn";

export const THVLI_SUB_PATH = "/backend/cm";

export async function apiThvli(fetch: Function, id: string): Promise<any> {
  return api(fetch, `${THVLI_DOMAIN}${THVLI_SUB_PATH}${id}`);
}

export async function getRibbonPage(fetch: Function, id: string, pageIndex: Number): Promise<any> {
  return apiThvli(fetch, `/ribbon/${id}/?page=${pageIndex}`);
}

export async function getRibbonInfo(fetch: Function, id: string, pageIndex: Number): Promise<any> {
  return getRibbonPage(fetch, id, 0);
}