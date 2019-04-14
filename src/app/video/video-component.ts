import { Component, OnInit, ViewChild } from 'angular-ts-decorators';
import { IMockVideos, videos } from '../mock-data/video/mock-videos';

let videoPlayer: HTMLVideoElement;
@Component({
  selector: 'app-video',
  template: require('./video-component.html'),
  styles: [require('./video-component.scss')],
})
@ViewChild('videoPlayer')
export class VideoComponent implements OnInit {
  public videoList: IMockVideos[] = [];
  private curr: number = 0; // 当前播放的视频
  private vLen: number = 0; // 播放列表的长度
  private currentVideoUrl: string;
  
  /*@ngInject*/
  constructor() {
    this.videoList = videos;
    this.vLen = this.videoList.length;
    this.currentVideoUrl = this.videoList[0].url;
    this.video = document.getElementById("video1");
    this.video.addEventListener('ended', this.play);
  }
  
  ngOnInit() {
    this.play();
  }
  
  toggleVideo() {
  
  }
  
  private play() {
    console.log('ended');
    // let video = document.getElementById("video1");
    // video.src = this.videoList[this.curr];
    // video.load(); //如果短的话，可以加载完成之后再播放，监听 canplaythrough 事件即可
    // video.play();
    // this.curr++;
    // if (this.curr >= this.vLen) this.curr = 0; // 播放完了，重新播放
  }
}