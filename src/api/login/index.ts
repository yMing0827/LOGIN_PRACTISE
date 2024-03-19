/**
 * 登录注册相关接口配置
 */
import {http} from "@/utils/http"

/**
 * 登录接口
 *  ----
 */
export function loginApiCtl(params:any){
    return http.request({
        url: '/login',
        method:"POST",
        params,
    })
} 