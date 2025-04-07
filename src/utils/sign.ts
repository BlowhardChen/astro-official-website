import qs from "qs";
import { md5 } from "js-md5";

interface RequestParams {
  [key: string]: string | number;
}

interface ParsedUrl {
  url: string;
  query: RequestParams;
}

/**
 * 获取URL参数并生成签名
 * @param urlStr 原始URL字符串
 * @returns 包含处理后的URL和带签名参数的ParsedUrl对象
 */
export const getRequestAndSign = (urlStr: string): ParsedUrl => {
  const [url, queryStr] = urlStr.split("?");
  const params: RequestParams = {};

  // 解析现有查询参数
  if (queryStr) {
    const pairs = queryStr.split("&");
    for (const pair of pairs) {
      const [key, value] = pair.split("=");
      if (key) {
        params[decodeURIComponent(key)] = decodeURIComponent(value || "");
      }
    }
  }

  // 添加时间戳
  params.t = Math.floor(Date.now() / 1000);

  // 生成签名
  const keys = Object.keys(params)
    .filter((k) => k !== "sign")
    .sort();

  const pairs = keys.map((k) => `${k}=${params[k]}`);
  pairs.push("appkey=yZXBV5LVtNU3BrTxB1VQqFqn4KLjSux"); // 添加appkey

  const signStr = pairs.join("&");
  const sign = md5(signStr).toUpperCase(); // 生成签名

  // 添加签名到参数
  params.sign = sign;

  return { url, query: params };
};

/**
 * 生成带签名的GET请求URL
 * @param url 原始URL
 * @returns 带签名参数的完整URL字符串
 */
export const generateGetUrl = (url: string): string => {
  const { url: baseURL, query } = getRequestAndSign(url);
  return `${baseURL}?${qs.stringify(query)}`;
};
