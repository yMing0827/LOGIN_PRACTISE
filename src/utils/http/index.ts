import axios from 'axios'

/**
 * 发送请求
 * @param {string} DOMAIN 域名
 * @param {string} API_PREFIX 域名前缀
 * @param {string} CONTENT_TYPE 请求方式
 *  
 * @param {string} url
 * @param {string} method
 * @param {object} params 发送的数据
 */

// 网络请求相关
export const REQUEST = {
	// 域名
	DOMAIN: '',
	// 接口前缀
	API_PREFIX: '/api',
	// 默认请求 Content-Type
	CONTENT_TYPE: 'json', // 可以是 'json' 或 'form'
}

interface RequestOptions {
	url: string;
	method?: string;
	params?: any;
}

function createAxios() {
	const request = ({ url, method = 'POST', params }: RequestOptions) => {
		if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
			url = REQUEST.DOMAIN + REQUEST.API_PREFIX + url;
		}
		params = params ? params : {};
		let header: Record<string, string> = {};
		if (REQUEST.CONTENT_TYPE === 'json') {
			header['content-type'] = 'application/json';
		} else {
			header['content-type'] = 'application/x-www-form-urlencoded';
		}
		// 请求头参数合并
		let header_options = params?.header || {};
		header = { ...header, ...header_options };

		// 添加默认请求配置
		const defaultConfig = {
			timeout: 10000, // 10 seconds
		};

		return new Promise<any>((resolve, reject) => {
			axios({
				baseURL: url,
				method: method,
				data: params,
				headers: header,
				...defaultConfig,
			}).then((res) => {
				if (res.status === 200) {
					let result = res.data;
					resolve(result);
				} else {
					reject('网络请求失败：' + res.status);
				}
			}).catch((err) => {
				reject(err);
			});
		});
	};

	return { request };
}

export const http = createAxios();