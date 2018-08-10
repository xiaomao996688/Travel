/*
* @Author: Jacky
* @Date:   2018-08-10 10:55:24
* @Last Modified by:   Jacky
* @Last Modified time: 2018-08-10 14:54:56
*/

export default {
	changeCity (state, city) {
		state.city = city
		try {
			if(localStorage.city){
				localStorage.city = city
			}
		} catch (e) {}
	}
}