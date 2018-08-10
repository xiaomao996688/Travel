/*
* @Author: Jacky
* @Date:   2018-08-10 10:54:46
* @Last Modified by:   Jacky
* @Last Modified time: 2018-08-10 14:54:02
*/
let  defaultCity = '上海'
try {
	if( localStorage.city ){
		defaultCity = localStorage.city
	}
} catch (e) {}

export default {
	city: defaultCity
}