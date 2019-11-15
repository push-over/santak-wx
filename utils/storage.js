import { mode } from '../config/index.js'

const setStorageSync = (key, value) => {
  try {
    wx.setStorageSync(`${mode}_${key}`, value)
  } catch (err) {
    console.error('保存storage出错: ', JSON.parse(err))
  }
}

const getStorageSync = (key) => {
  try {
    return wx.getStorageSync(`${mode}_${key}`)
  } catch (err) {
    console.error('获取storage出错: ', JSON.parse(err))
  }
}

const removeStorageSync = (key) => {
  try {
    wx.removeStorageSync(`${mode}_${key}`)
  } catch (err) {
    console.error('移除storage出错: ', JSON.parse(err))
  }
}

module.exports = {
  setStorageSync: setStorageSync,
  getStorageSync: getStorageSync,
  removeStorageSync: removeStorageSync
}