/*
 * @Author: 赵亚鑫Deep Lane
 * @Date: 2022-04-13 22:22:46
 * @LastEditors: 赵亚鑫Deep Lane
 * @LastEditTime: 2022-04-13 22:39:48
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
  readTextFile("./data/task.json", function (text) {
    const data = JSON.parse(text)
  })
  