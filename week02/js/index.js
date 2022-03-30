/*
 * @Author: Deep Lane
 * @Date: 2022-03-26 15:24:00
 * @LastEditors: 赵亚鑫Deep Lane
 * @LastEditTime: 2022-03-30 13:23:20
 * @Description:
 */

/**
 *
 * @param {string} file
 * @param {function} callback
 */
function readTextFile(file, callback) {
  const rawFile = new XMLHttpRequest()
  rawFile.overrideMimeType("application/json")
  rawFile.open("GET", file, true)
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText)
    }
  }
  rawFile.send(null)
}

//usage:
readTextFile("../db/task.json", function (text) {
  const data = JSON.parse(text)
  console.log(data)
})
