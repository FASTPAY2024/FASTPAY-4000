function animateButton(button) {
  button.classList.add('button-animate');
}

function showNotification(message, type = 'success') {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.classList.add(type);
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
    notification.classList.remove(type);
  }, 3000);
}

// Optimized event listeners for copy buttons
document.querySelectorAll('.van-button__text').forEach(button => {
  button.addEventListener('click', (event) => {
    animateButton(event.target);

    let textToCopy = '';
    if (event.target.textContent.trim() === 'COPY') {
      textToCopy = event.target.parentElement.previousElementSibling.textContent.trim();
    } else if (event.target.textContent.trim() === 'COPY UTR') {
      textToCopy = document.getElementById('van-field-1-input').value;
    }

    navigator.clipboard.writeText(textToCopy)
      .then(() => showNotification('Copied to clipboard!'))
      .catch(err => {
        console.error('Failed to copy: ', err);
        showNotification('Failed to copy!', 'error');
      });
  });
});

// Form handling and UTR validation
let submitCount = 0;
const utrInput = document.getElementById('van-field-1-input');
document.querySelector('.van-form').addEventListener('submit', (event) => {
  event.preventDefault();

  if (submitCount >= 2) {
    showNotification('UTR already used!', 'error');
    return;
  }

  // Replace with your actual form submission logic
  // ...

  submitCount++;
  utrInput.value = '';
  showNotification('UTR submitted successfully!');

  if (submitCount >= 2) {
    showNotification('UTR already used!', 'error');
  }
});

// Optimized event listener for radio buttons
document.querySelectorAll('.van-radio').forEach(radioButton => {
  radioButton.addEventListener('click', () => {
    document.querySelectorAll('.van-radio').forEach(rb => rb.parentElement.classList.remove('radio-animate'));
    radioButton.parentElement.classList.add('radio-animate');
  };
  :host,
:root {
  --van-black: #000;
  --van-white: #fff;
  --van-gray-1: #f7f8fa;
  --van-gray-2: #f2f3f5;
  --van-gray-3: #ebedf0;
  --van-gray-4: #dcdee0;
  --van-gray-5: #c8c9cc;
  --van-gray-6: #969799;
  --van-gray-7: #646566;
  --van-gray-8: #323233;
  --van-red: #ee0a24;
  --van-blue: #1989fa;
  --van-orange: #ff976a;
  --van-orange-dark: #ed6a0c;
  --van-orange-light: #fffbe8;
  --van-green: #07c160;
  --van-gradient-red: linear-gradient(90deg, #ff6034, #ee0a24);
  --van-gradient-orange: linear-gradient(90deg, #ffd01e, #ff8917);
  --van-primary-color: var(--van-blue);
  --van-success-color: var(--van-green);
  --van-danger-color: var(--van-red);
  --van-warning-color: var(--van-orange);
  --van-text-color: var(--van-gray-8);
  --van-text-color-2: var(--van-gray-6);
  --van-text-color-3: var(--van-gray-5);
  --van-active-color: var(--van-gray-2);
  --van-active-opacity: 0.6;
  --van-disabled-opacity: 0.5;
  --van-background: var(--van-gray-1);
  --van-background-2: var(--van-white);
  --van-background-3: var(--van-white);
  --van-padding-base: 1.06667vw;
  --van-padding-xs: 2.13333vw;
  --van-padding-sm: 3.2vw;
  --van-padding-md: 4.26667vw;
  --van-padding-lg: 6.4vw;
  --van-padding-xl: 8.53333vw;
  --van-font-bold: 600;
  --van-font-size-xs: 2.66667vw;
  --van-font-size-sm: 3.2vw;
  --van-font-size-md: 3.73333vw;
  --van-font-size-lg: 4.26667vw;
  --van-line-height-xs: 3.73333vw;
  --van-line-height-sm: 4.8vw;
  --van-line-height-md: 5.33333vw;
  --van-line-height-lg: 5.86667vw;
  --van-base-font: -apple-system, BlinkMacSystemFont, "Helvetica Neue",
    Helvetica, Segoe UI, Arial, Roboto, "PingFang SC", "miui",
    "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
  --van-price-font: avenir-heavy, "PingFang SC", helvetica neue, arial,
    sans-serif;
  --van-duration-base: 0.3s;
  --van-duration-fast: 0.2s;
  --van-ease-out: ease-out;
  --van-ease-in: ease-in;
  --van-border-color: var(--van-gray-3);
  --van-border-width: 1px;
  --van-radius-sm: 0.53333vw;
  --van-radius-md: 1.06667vw;
  --van-radius-lg: 2.13333vw;
  --van-radius-max: 266.4vw;
}
.van-theme-dark {
  --van-text-color: #f5f5f5;
  --van-text-color-2: #707070;
  --van-text-color-3: #4d4d4d;
  --van-border-color: #3a3a3c;
  --van-active-color: #3a3a3c;
  --van-background: #000;
  --van-background-2: #1c1c1e;
  --van-background-3: #37363b;
}
html {
  -webkit-tap-highlight-color: transparent;
}
body {
  margin: 10px;
  font-family: var(--van-base-font);
}
a {
  text-decoration: none;
}
button,
input,
textarea {
  color: inherit;
  font: inherit;
}
[class*="van-"]:focus,
a:focus,
button:focus,
input:focus,
textarea:focus {
  outline: none;
}
ol,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
@keyframes van-slide-up-enter {
  0% {
    transform: translate3d(0, 100%, 0);
  }
}
@keyframes van-slide-up-leave {
  to {
    transform: translate3d(0, 100%, 0);
  }
}
@keyframes van-slide-down-enter {
  0% {
    transform: translate3d(0, -100%, 0);
  }
}
@keyframes van-slide-down-leave {
  to {
    transform: translate3d(0, -100%, 0);
  }
}
@keyframes van-slide-left-enter {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes van-slide-left-leave {
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes van-slide-right-enter {
  0% {
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes van-slide-right-leave {
  to {
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes van-fade-in {
  0% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes van-fade-out {
  0% {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes van-rotate {
  0% {
    transform: rotate(0);
  }
  to {
    transform: rotate(1turn);
  }
}
.van-fade-enter-active {
  animation: var(--van-duration-base) van-fade-in both var(--van-ease-out);
}
.van-fade-leave-active {
  animation: var(--van-duration-base) van-fade-out both var(--van-ease-in);
}
.van-slide-up-enter-active {
  animation: van-slide-up-enter var(--van-duration-base) both
    var(--van-ease-out);
}
.van-slide-up-leave-active {
  animation: van-slide-up-leave var(--van-duration-base) both var(--van-ease-in);
}
.van-slide-down-enter-active {
  animation: van-slide-down-enter var(--van-duration-base) both
    var(--van-ease-out);
}
.van-slide-down-leave-active {
  animation: van-slide-down-leave var(--van-duration-base) both
    var(--van-ease-in);
}
.van-slide-left-enter-active {
  animation: van-slide-left-enter var(--van-duration-base) both
    var(--van-ease-out);
}
.van-slide-left-leave-active {
  animation: van-slide-left-leave var(--van-duration-base) both
    var(--van-ease-in);
}
.van-slide-right-enter-active {
  animation: van-slide-right-enter var(--van-duration-base) both
    var(--van-ease-out);
}
.van-slide-right-leave-active {
  animation: van-slide-right-leave var(--van-duration-base) both
    var(--van-ease-in);
}
.van-clearfix:after {
  display: table;
  clear: both;
  content: "";
}
.van-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.van-multi-ellipsis--l2 {
  -webkit-line-clamp: 2;
}
.van-multi-ellipsis--l2,
.van-multi-ellipsis--l3 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  line-break: anywhere;
  -webkit-box-orient: vertical;
}
.van-multi-ellipsis--l3 {
  -webkit-line-clamp: 3;
}
.van-safe-area-top {
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
}
.van-safe-area-bottom {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
.van-haptics-feedback {
  cursor: pointer;
}
.van-haptics-feedback:active {
  opacity: var(--van-active-opacity);
}
[class*="van-hairline"]:after {
  position: absolute;
  box-sizing: border-box;
  content: " ";
  pointer-events: none;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  border: 0 solid var(--van-border-color);
  transform: scale(0.5);
}
.van-hairline,
.van-hairline--bottom,
.van-hairline--left,
.van-hairline--right,
.van-hairline--surround,
.van-hairline--top,
.van-hairline--top-bottom {
  position: relative;
}
.van-hairline--top:after {
  border-top-width: var(--van-border-width);
}
.van-hairline--left:after {
  border-left-width: var(--van-border-width);
}
.van-hairline--right:after {
  border-right-width: var(--van-border-width);
}
.van-hairline--bottom:after {
  border-bottom-width: var(--van-border-width);
}
.van-hairline--top-bottom:after,
.van-hairline-unset--top-bottom:after {
  border-width: var(--van-border-width) 0;
}
.van-hairline--surround:after {
  border-width: var(--van-border-width);
}
:host,
:root {
  --van-badge-size: 4.26667vw;
  --van-badge-color: var(--van-white);
  --van-badge-padding: 0 0.8vw;
  --van-badge-font-size: var(--van-font-size-sm);
  --van-badge-font-weight: var(--van-font-bold);
  --van-badge-border-width: var(--van-border-width);
  --van-badge-background: var(--van-danger-color);
  --van-badge-dot-color: var(--van-danger-color);
  --van-badge-dot-size: 2.13333vw;
  --van-badge-font: -apple-system-font, helvetica neue, arial, sans-serif;
}
.van-badge {
  display: inline-block;
  box-sizing: border-box;
  min-width: var(--van-badge-size);
  padding: var(--van-badge-padding);
  color: var(--van-badge-color);
  font-weight: var(--van-badge-font-weight);
  font-size: var(--van-badge-font-size);
  font-family: var(--van-badge-font);
  line-height: 1.2;
  text-align: center;
  background: var(--van-badge-background);
  border: var(--van-badge-border-width) solid var(--van-background-2);
  border-radius: var(--van-radius-max);
}
.van-badge--fixed {
  position: absolute;
  transform-origin: 100%;
}
.van-badge--top-left {
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
}
.van-badge--top-right {
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
}
.van-badge--bottom-left {
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
}
.van-badge--bottom-right {
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
}
.van-badge--dot {
  width: var(--van-badge-dot-size);
  min-width: 0;
  height: var(--van-badge-dot-size);
  background: var(--van-badge-dot-color);
  border-radius: 100%;
  border: none;
  padding: 0;
}
.van-badge__wrapper,
.van-icon {
  position: relative;
  display: inline-block;
}
.van-icon {
  font: 3.73333vw/1 vant-icon;
  font: normal normal normal 3.73333vw/1
    var(--van-icon-font-family, "vant-icon");
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}
.van-icon:before {
  display: inline-block;
}
.van-icon-arrow-double-left:before {
  content: "\e653";
}
.van-icon-arrow-double-right:before {
  content: "\e654";
}
.van-icon-contact:before {
  content: "\e753";
}
.van-icon-notes:before {
  content: "\e63c";
}
.van-icon-records:before {
  content: "\e63d";
}
.van-icon-cash-back-record:before {
  content: "\e63e";
}
.van-icon-newspaper:before {
  content: "\e63f";
}
.van-icon-discount:before {
  content: "\e640";
}
.van-icon-completed:before {
  content: "\e641";
}
.van-icon-user:before {
  content: "\e642";
}
.van-icon-description:before {
  content: "\e643";
}
.van-icon-list-switch:before {
  content: "\e6ad";
}
.van-icon-list-switching:before {
  content: "\e65a";
}
.van-icon-link-o:before {
  content: "\e751";
}
.van-icon-miniprogram-o:before {
  content: "\e752";
}
.van-icon-qq:before {
  content: "\e74e";
}
.van-icon-wechat-moments:before {
  content: "\e74f";
}
.van-icon-weibo:before {
  content: "\e750";
}
.van-icon-cash-o:before {
  content: "\e74d";
}
.van-icon-guide-o:before {
  content: "\e74c";
}
.van-icon-invitation:before {
  content: "\e6d6";
}
.van-icon-shield-o:before {
  content: "\e74b";
}
.van-icon-exchange:before {
  content: "\e6af";
}
.van-icon-eye:before {
  content: "\e6b0";
}
.van-icon-enlarge:before {
  content: "\e6b1";
}
.van-icon-expand-o:before {
  content: "\e6b2";
}
.van-icon-eye-o:before {
  content: "\e6b3";
}
.van-icon-expand:before {
  content: "\e6b4";
}
.van-icon-filter-o:before {
  content: "\e6b5";
}
.van-icon-fire:before {
  content: "\e6b6";
}
.van-icon-fail:before {
  content: "\e6b7";
}
.van-icon-failure:before {
  content: "\e6b8";
}
.van-icon-fire-o:before {
  content: "\e6b9";
}
.van-icon-flag-o:before {
  content: "\e6ba";
}
.van-icon-font:before {
  content: "\e6bb";
}
.van-icon-font-o:before {
  content: "\e6bc";
}
.van-icon-gem-o:before {
  content: "\e6bd";
}
.van-icon-flower-o:before {
  content: "\e6be";
}
.van-icon-gem:before {
  content: "\e6bf";
}
.van-icon-gift-card:before {
  content: "\e6c0";
}
.van-icon-friends:before {
  content: "\e6c1";
}
.van-icon-friends-o:before {
  content: "\e6c2";
}
.van-icon-gold-coin:before {
  content: "\e6c3";
}
.van-icon-gold-coin-o:before {
  content: "\e6c4";
}
.van-icon-good-job-o:before {
  content: "\e6c5";
}
.van-icon-gift:before {
  content: "\e6c6";
}
.van-icon-gift-o:before {
  content: "\e6c7";
}
.van-icon-gift-card-o:before {
  content: "\e6c8";
}
.van-icon-good-job:before {
  content: "\e6c9";
}
.van-icon-home-o:before {
  content: "\e6ca";
}
.van-icon-goods-collect:before {
  content: "\e6cb";
}
.van-icon-graphic:before {
  content: "\e6cc";
}
.van-icon-goods-collect-o:before {
  content: "\e6cd";
}
.van-icon-hot-o:before {
  content: "\e6ce";
}
.van-icon-info:before {
  content: "\e6cf";
}
.van-icon-hotel-o:before {
  content: "\e6d0";
}
.van-icon-info-o:before {
  content: "\e6d1";
}
.van-icon-hot-sale-o:before {
  content: "\e6d2";
}
.van-icon-hot:before {
  content: "\e6d3";
}
.van-icon-like:before {
  content: "\e6d4";
}
.van-icon-idcard:before {
  content: "\e6d5";
}
.van-icon-like-o:before {
  content: "\e6d7";
}
.van-icon-hot-sale:before {
  content: "\e6d8";
}
.van-icon-location-o:before {
  content: "\e6d9";
}
.van-icon-location:before {
  content: "\e6da";
}
.van-icon-label:before {
  content: "\e6db";
}
.van-icon-lock:before {
  content: "\e6dc";
}
.van-icon-label-o:before {
  content: "\e6dd";
}
.van-icon-map-marked:before {
  content: "\e6de";
}
.van-icon-logistics:before {
  content: "\e6df";
}
.van-icon-manager:before {
  content: "\e6e0";
}
.van-icon-more:before {
  content: "\e6e1";
}
.van-icon-live:before {
  content: "\e6e2";
}
.van-icon-manager-o:before {
  content: "\e6e3";
}
.van-icon-medal:before {
  content: "\e6e4";
}
.van-icon-more-o:before {
  content: "\e6e5";
}
.van-icon-music-o:before {
  content: "\e6e6";
}
.van-icon-music:before {
  content: "\e6e7";
}
.van-icon-new-arrival-o:before {
  content: "\e6e8";
}
.van-icon-medal-o:before {
  content: "\e6e9";
}
.van-icon-new-o:before {
  content: "\e6ea";
}
.van-icon-free-postage:before {
  content: "\e6eb";
}
.van-icon-newspaper-o:before {
  content: "\e6ec";
}
.van-icon-new-arrival:before {
  content: "\e6ed";
}
.van-icon-minus:before {
  content: "\e6ee";
}
.van-icon-orders-o:before {
  content: "\e6ef";
}
.van-icon-new:before {
  content: "\e6f0";
}
.van-icon-paid:before {
  content: "\e6f1";
}
.van-icon-notes-o:before {
  content: "\e6f2";
}
.van-icon-other-pay:before {
  content: "\e6f3";
}
.van-icon-pause-circle:before {
  content: "\e6f4";
}
.van-icon-pause:before {
  content: "\e6f5";
}
.van-icon-pause-circle-o:before {
  content: "\e6f6";
}
.van-icon-peer-pay:before {
  content: "\e6f7";
}
.van-icon-pending-payment:before {
  content: "\e6f8";
}
.van-icon-passed:before {
  content: "\e6f9";
}
.van-icon-plus:before {
  content: "\e6fa";
}
.van-icon-phone-circle-o:before {
  content: "\e6fb";
}
.van-icon-phone-o:before {
  content: "\e6fc";
}
.van-icon-printer:before {
  content: "\e6fd";
}
.van-icon-photo-fail:before {
  content: "\e6fe";
}
.van-icon-phone:before {
  content: "\e6ff";
}
.van-icon-photo-o:before {
  content: "\e700";
}
.van-icon-play-circle:before {
  content: "\e701";
}
.van-icon-play:before {
  content: "\e702";
}
.van-icon-phone-circle:before {
  content: "\e703";
}
.van-icon-point-gift-o:before {
  content: "\e704";
}
.van-icon-point-gift:before {
  content: "\e705";
}
.van-icon-play-circle-o:before {
  content: "\e706";
}
.van-icon-shrink:before {
  content: "\e707";
}
.van-icon-photo:before {
  content: "\e708";
}
.van-icon-qr:before {
  content: "\e709";
}
.van-icon-qr-invalid:before {
  content: "\e70a";
}
.van-icon-question-o:before {
  content: "\e70b";
}
.van-icon-revoke:before {
  content: "\e70c";
}
.van-icon-replay:before {
  content: "\e70d";
}
.van-icon-service:before {
  content: "\e70e";
}
.van-icon-question:before {
  content: "\e70f";
}
.van-icon-search:before {
  content: "\e710";
}
.van-icon-refund-o:before {
  content: "\e711";
}
.van-icon-service-o:before {
  content: "\e712";
}
.van-icon-scan:before {
  content: "\e713";
}
.van-icon-share:before {
  content: "\e714";
}
.van-icon-send-gift-o:before {
  content: "\e715";
}
.van-icon-share-o:before {
  content: "\e716";
}
.van-icon-setting:before {
  content: "\e717";
}
.van-icon-points:before {
  content: "\e718";
}
.van-icon-photograph:before {
  content: "\e719";
}
.van-icon-shop:before {
  content: "\e71a";
}
.van-icon-shop-o:before {
  content: "\e71b";
}
.van-icon-shop-collect-o:before {
  content: "\e71c";
}
.van-icon-shop-collect:before {
  content: "\e71d";
}
.van-icon-smile:before {
  content: "\e71e";
}
.van-icon-shopping-cart-o:before {
  content: "\e71f";
}
.van-icon-sign:before {
  content: "\e720";
}
.van-icon-sort:before {
  content: "\e721";
}
.van-icon-star-o:before {
  content: "\e722";
}
.van-icon-smile-comment-o:before {
  content: "\e723";
}
.van-icon-stop:before {
  content: "\e724";
}
.van-icon-stop-circle-o:before {
  content: "\e725";
}
.van-icon-smile-o:before {
  content: "\e726";
}
.van-icon-star:before {
  content: "\e727";
}
.van-icon-success:before {
  content: "\e728";
}
.van-icon-stop-circle:before {
  content: "\e729";
}
.van-icon-records-o:before {
  content: "\e72a";
}
.van-icon-shopping-cart:before {
  content: "\e72b";
}
.van-icon-tosend:before {
  content: "\e72c";
}
.van-icon-todo-list:before {
  content: "\e72d";
}
.van-icon-thumb-circle-o:before {
  content: "\e72e";
}
.van-icon-thumb-circle:before {
  content: "\e72f";
}
.van-icon-umbrella-circle:before {
  content: "\e730";
}
.van-icon-underway:before {
  content: "\e731";
}
.van-icon-upgrade:before {
  content: "\e732";
}
.van-icon-todo-list-o:before {
  content: "\e733";
}
.van-icon-tv-o:before {
  content: "\e734";
}
.van-icon-underway-o:before {
  content: "\e735";
}
.van-icon-user-o:before {
  content: "\e736";
}
.van-icon-vip-card-o:before {
  content: "\e737";
}
.van-icon-vip-card:before {
  content: "\e738";
}
.van-icon-send-gift:before {
  content: "\e739";
}
.van-icon-wap-home:before {
  content: "\e73a";
}
.van-icon-wap-nav:before {
  content: "\e73b";
}
.van-icon-volume-o:before {
  content: "\e73c";
}
.van-icon-video:before {
  content: "\e73d";
}
.van-icon-wap-home-o:before {
  content: "\e73e";
}
.van-icon-volume:before {
  content: "\e73f";
}
.van-icon-warning:before {
  content: "\e740";
}
.van-icon-weapp-nav:before {
  content: "\e741";
}
.van-icon-wechat-pay:before {
  content: "\e742";
}
.van-icon-warning-o:before {
  content: "\e743";
}
.van-icon-wechat:before {
  content: "\e744";
}
.van-icon-setting-o:before {
  content: "\e745";
}
.van-icon-youzan-shield:before {
  content: "\e746";
}
.van-icon-warn-o:before {
  content: "\e747";
}
.van-icon-smile-comment:before {
  content: "\e748";
}
.van-icon-user-circle-o:before {
  content: "\e749";
}
.van-icon-video-o:before {
  content: "\e74a";
}
.van-icon-add-square:before {
  content: "\e65c";
}
.van-icon-add:before {
  content: "\e65d";
}
.van-icon-arrow-down:before {
  content: "\e65e";
}
.van-icon-arrow-up:before {
  content: "\e65f";
}
.van-icon-arrow:before {
  content: "\e660";
}
.van-icon-after-sale:before {
  content: "\e661";
}
.van-icon-add-o:before {
  content: "\e662";
}
.van-icon-alipay:before {
  content: "\e663";
}
.van-icon-ascending:before {
  content: "\e664";
}
.van-icon-apps-o:before {
  content: "\e665";
}
.van-icon-aim:before {
  content: "\e666";
}
.van-icon-award:before {
  content: "\e667";
}
.van-icon-arrow-left:before {
  content: "\e668";
}
.van-icon-award-o:before {
  content: "\e669";
}
.van-icon-audio:before {
  content: "\e66a";
}
.van-icon-bag-o:before {
  content: "\e66b";
}
.van-icon-balance-list:before {
  content: "\e66c";
}
.van-icon-back-top:before {
  content: "\e66d";
}
.van-icon-bag:before {
  content: "\e66e";
}
.van-icon-balance-pay:before {
  content: "\e66f";
}
.van-icon-balance-o:before {
  content: "\e670";
}
.van-icon-bar-chart-o:before {
  content: "\e671";
}
.van-icon-bars:before {
  content: "\e672";
}
.van-icon-balance-list-o:before {
  content: "\e673";
}
.van-icon-birthday-cake-o:before {
  content: "\e674";
}
.van-icon-bookmark:before {
  content: "\e675";
}
.van-icon-bill:before {
  content: "\e676";
}
.van-icon-bell:before {
  content: "\e677";
}
.van-icon-browsing-history-o:before {
  content: "\e678";
}
.van-icon-browsing-history:before {
  content: "\e679";
}
.van-icon-bookmark-o:before {
  content: "\e67a";
}
.van-icon-bulb-o:before {
  content: "\e67b";
}
.van-icon-bullhorn-o:before {
  content: "\e67c";
}
.van-icon-bill-o:before {
  content: "\e67d";
}
.van-icon-calendar-o:before {
  content: "\e67e";
}
.van-icon-brush-o:before {
  content: "\e67f";
}
.van-icon-card:before {
  content: "\e680";
}
.van-icon-cart-o:before {
  content: "\e681";
}
.van-icon-cart-circle:before {
  content: "\e682";
}
.van-icon-cart-circle-o:before {
  content: "\e683";
}
.van-icon-cart:before {
  content: "\e684";
}
.van-icon-cash-on-deliver:before {
  content: "\e685";
}
.van-icon-cash-back-record-o:before {
  content: "\e686";
}
.van-icon-cashier-o:before {
  content: "\e687";
}
.van-icon-chart-trending-o:before {
  content: "\e688";
}
.van-icon-certificate:before {
  content: "\e689";
}
.van-icon-chat:before {
  content: "\e68a";
}
.van-icon-clear:before {
  content: "\e68b";
}
.van-icon-chat-o:before {
  content: "\e68c";
}
.van-icon-checked:before {
  content: "\e68d";
}
.van-icon-clock:before {
  content: "\e68e";
}
.van-icon-clock-o:before {
  content: "\e68f";
}
.van-icon-close:before {
  content: "\e690";
}
.van-icon-closed-eye:before {
  content: "\e691";
}
.van-icon-circle:before {
  content: "\e692";
}
.van-icon-cluster-o:before {
  content: "\e693";
}
.van-icon-column:before {
  content: "\e694";
}
.van-icon-comment-circle-o:before {
  content: "\e695";
}
.van-icon-cluster:before {
  content: "\e696";
}
.van-icon-comment:before {
  content: "\e697";
}
.van-icon-comment-o:before {
  content: "\e698";
}
.van-icon-comment-circle:before {
  content: "\e699";
}
.van-icon-completed-o:before {
  content: "\e69a";
}
.van-icon-credit-pay:before {
  content: "\e69b";
}
.van-icon-coupon:before {
  content: "\e69c";
}
.van-icon-debit-pay:before {
  content: "\e69d";
}
.van-icon-coupon-o:before {
  content: "\e69e";
}
.van-icon-contact-o:before {
  content: "\e69f";
}
.van-icon-descending:before {
  content: "\e6a0";
}
.van-icon-desktop-o:before {
  content: "\e6a1";
}
.van-icon-diamond-o:before {
  content: "\e6a2";
}
.van-icon-description-o:before {
  content: "\e6a3";
}
.van-icon-delete:before {
  content: "\e6a4";
}
.van-icon-diamond:before {
  content: "\e6a5";
}
.van-icon-delete-o:before {
  content: "\e6a6";
}
.van-icon-cross:before {
  content: "\e6a7";
}
.van-icon-edit:before {
  content: "\e6a8";
}
.van-icon-ellipsis:before {
  content: "\e6a9";
}
.van-icon-down:before {
  content: "\e6aa";
}
.van-icon-discount-o:before {
  content: "\e6ab";
}
.van-icon-ecard-pay:before {
  content: "\e6ac";
}
.van-icon-envelop-o:before {
  content: "\e6ae";
}
@font-face {
  font-weight: 400;
  font-family: vant-icon;
  font-style: normal;
  font-display: auto;
  src: url(data:font/woff2;charset=utf-8;base64,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)
      format("woff2"),
    url(//at.alicdn.com/t/c/font_2553510_ciljc7axaw7.woff?t=1705587463221)
      format("woff");
}
.van-icon__image {
  display: block;
  width: 1em;
  height: 1em;
  -o-object-fit: contain;
  object-fit: contain;
}
:host,
:root {
  --van-loading-text-color: var(--van-text-color-2);
  --van-loading-text-font-size: var(--van-font-size-md);
  --van-loading-spinner-color: var(--van-gray-5);
  --van-loading-spinner-size: 8vw;
  --van-loading-spinner-duration: 0.8s;
}
.van-loading {
  color: var(--van-loading-spinner-color);
  font-size: 0;
}
.van-loading,
.van-loading__spinner {
  position: relative;
  vertical-align: middle;
}
.van-loading__spinner {
  display: inline-block;
  width: var(--van-loading-spinner-size);
  max-width: 100%;
  height: var(--van-loading-spinner-size);
  max-height: 100%;
  animation: van-rotate var(--van-loading-spinner-duration) linear infinite;
}
.van-loading__spinner--spinner {
  animation-timing-function: steps(12);
}
.van-loading__spinner--circular {
  animation-duration: 2s;
}
.van-loading__line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.van-loading__line:before {
  display: block;
  width: 0.53333vw;
  height: 25%;
  margin: 0 auto;
  background-color: currentColor;
  border-radius: 40%;
  content: " ";
}
.van-loading__circular {
  display: block;
  width: 100%;
  height: 100%;
}
.van-loading__circular circle {
  animation: van-circular 1.5s ease-in-out infinite;
  stroke: currentColor;
  stroke-width: 3;
  stroke-linecap: round;
}
.van-loading__text {
  display: inline-block;
  margin-left: var(--van-padding-xs);
  color: var(--van-loading-text-color);
  font-size: var(--van-loading-text-font-size);
  vertical-align: middle;
}
.van-loading--vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.van-loading--vertical .van-loading__text {
  margin: var(--van-padding-xs) 0 0;
}
@keyframes van-circular {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40;
  }
  to {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120;
  }
}
.van-loading__line--1 {
  transform: rotate(30deg);
  opacity: 1;
}
.van-loading__line--2 {
  transform: rotate(60deg);
  opacity: 0.9375;
}
.van-loading__line--3 {
  transform: rotate(90deg);
  opacity: 0.875;
}
.van-loading__line--4 {
  transform: rotate(120deg);
  opacity: 0.8125;
}
.van-loading__line--5 {
  transform: rotate(150deg);
  opacity: 0.75;
}
.van-loading__line--6 {
  transform: rotate(180deg);
  opacity: 0.6875;
}
.van-loading__line--7 {
  transform: rotate(210deg);
  opacity: 0.625;
}
.van-loading__line--8 {
  transform: rotate(240deg);
  opacity: 0.5625;
}
.van-loading__line--9 {
  transform: rotate(270deg);
  opacity: 0.5;
}
.van-loading__line--10 {
  transform: rotate(300deg);
  opacity: 0.4375;
}
.van-loading__line--11 {
  transform: rotate(330deg);
  opacity: 0.375;
}
.van-loading__line--12 {
  transform: rotate(1turn);
  opacity: 0.3125;
}
:host,
:root {
  --van-overlay-z-index: 1;
  --van-overlay-background: rgba(0, 0, 0, 0.7);
}
.van-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--van-overlay-z-index);
  width: 100%;
  height: 100%;
  background: var(--van-overlay-background);
}
:host,
:root {
  --van-popup-background: var(--van-background-2);
  --van-popup-transition: transform var(--van-duration-base);
  --van-popup-round-radius: 4.26667vw;
  --van-popup-close-icon-size: 5.86667vw;
  --van-popup-close-icon-color: var(--van-gray-5);
  --van-popup-close-icon-margin: 4.26667vw;
  --van-popup-close-icon-z-index: 1;
}
.van-overflow-hidden {
  overflow: hidden !important;
}
.van-popup {
  position: fixed;
  max-height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  background: var(--van-popup-background);
  transition: var(--van-popup-transition);
  -webkit-overflow-scrolling: touch;
}
.van-popup--center {
  top: 50%;
  left: 0;
  right: 0;
  width: -moz-fit-content;
  width: fit-content;
  max-width: calc(100vw - var(--van-padding-md) * 2);
  margin: 0 auto;
  transform: translateY(-50%);
}
.van-popup--center.van-popup--round {
  border-radius: var(--van-popup-round-radius);
}
.van-popup--top {
  top: 0;
  left: 0;
  width: 100%;
}
.van-popup--top.van-popup--round {
  border-radius: 0 0 var(--van-popup-round-radius) var(--van-popup-round-radius);
}
.van-popup--right {
  top: 50%;
  right: 0;
  transform: translate3d(0, -50%, 0);
}
.van-popup--right.van-popup--round {
  border-radius: var(--van-popup-round-radius) 0 0 var(--van-popup-round-radius);
}
.van-popup--bottom {
  bottom: 0;
  left: 0;
  width: 100%;
}
.van-popup--bottom.van-popup--round {
  border-radius: var(--van-popup-round-radius) var(--van-popup-round-radius) 0 0;
}
.van-popup--left {
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 0);
}
.van-popup--left.van-popup--round {
  border-radius: 0 var(--van-popup-round-radius) var(--van-popup-round-radius) 0;
}
.van-popup-slide-bottom-enter-active,
.van-popup-slide-left-enter-active,
.van-popup-slide-right-enter-active,
.van-popup-slide-top-enter-active {
  transition-timing-function: var(--van-ease-out);
}
.van-popup-slide-bottom-leave-active,
.van-popup-slide-left-leave-active,
.van-popup-slide-right-leave-active,
.van-popup-slide-top-leave-active {
  transition-timing-function: var(--van-ease-in);
}
.van-popup-slide-top-enter-from,
.van-popup-slide-top-leave-active {
  transform: translate3d(0, -100%, 0);
}
.van-popup-slide-right-enter-from,
.van-popup-slide-right-leave-active {
  transform: translate3d(100%, -50%, 0);
}
.van-popup-slide-bottom-enter-from,
.van-popup-slide-bottom-leave-active {
  transform: translate3d(0, 100%, 0);
}
.van-popup-slide-left-enter-from,
.van-popup-slide-left-leave-active {
  transform: translate3d(-100%, -50%, 0);
}
.van-popup__close-icon {
  position: absolute;
  z-index: var(--van-popup-close-icon-z-index);
  color: var(--van-popup-close-icon-color);
  font-size: var(--van-popup-close-icon-size);
}
.van-popup__close-icon--top-left {
  top: var(--van-popup-close-icon-margin);
  left: var(--van-popup-close-icon-margin);
}
.van-popup__close-icon--top-right {
  top: var(--van-popup-close-icon-margin);
  right: var(--van-popup-close-icon-margin);
}
.van-popup__close-icon--bottom-left {
  bottom: var(--van-popup-close-icon-margin);
  left: var(--van-popup-close-icon-margin);
}
.van-popup__close-icon--bottom-right {
  right: var(--van-popup-close-icon-margin);
  bottom: var(--van-popup-close-icon-margin);
}
:host,
:root {
  --van-toast-max-width: 70%;
  --van-toast-font-size: var(--van-font-size-md);
  --van-toast-text-color: var(--van-white);
  --van-toast-loading-icon-color: var(--van-white);
  --van-toast-line-height: var(--van-line-height-md);
  --van-toast-radius: var(--van-radius-lg);
  --van-toast-background: rgba(0, 0, 0, 0.7);
  --van-toast-icon-size: 9.6vw;
  --van-toast-text-min-width: 25.6vw;
  --van-toast-text-padding: var(--van-padding-xs) var(--van-padding-sm);
  --van-toast-default-padding: var(--van-padding-md);
  --van-toast-default-width: 23.46667vw;
  --van-toast-default-min-height: 23.46667vw;
  --van-toast-position-top-distance: 20%;
  --van-toast-position-bottom-distance: 20%;
}
.van-toast {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  transition: all var(--van-duration-fast);
  width: var(--van-toast-default-width);
  max-width: var(--van-toast-max-width);
  min-height: var(--van-toast-default-min-height);
  padding: var(--van-toast-default-padding);
  color: var(--van-toast-text-color);
  font-size: var(--van-toast-font-size);
  line-height: var(--van-toast-line-height);
  white-space: pre-wrap;
  word-break: break-all;
  text-align: center;
  background: var(--van-toast-background);
  border-radius: var(--van-toast-radius);
}
.van-toast--break-normal {
  word-break: normal;
  word-wrap: normal;
}
.van-toast--break-word {
  word-break: normal;
  word-wrap: break-word;
}
.van-toast--unclickable {
  overflow: hidden;
  cursor: not-allowed;
}
.van-toast--unclickable * {
  pointer-events: none;
}
.van-toast--html,
.van-toast--text {
  width: -moz-fit-content;
  width: fit-content;
  min-width: var(--van-toast-text-min-width);
  min-height: 0;
  padding: var(--van-toast-text-padding);
}
.van-toast--html .van-toast__text,
.van-toast--text .van-toast__text {
  margin-top: 0;
}
.van-toast--top {
  top: var(--van-toast-position-top-distance);
}
.van-toast--bottom {
  top: auto;
  bottom: var(--van-toast-position-bottom-distance);
}
.van-toast__icon {
  font-size: var(--van-toast-icon-size);
}
.van-toast__loading {
  padding: var(--van-padding-base);
  color: var(--van-toast-loading-icon-color);
}
.van-toast__text {
  margin-top: var(--van-padding-xs);
}
:host,
:root {
  --van-action-bar-background: var(--van-background-2);
  --van-action-bar-height: 13.33333vw;
}
.van-action-bar {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  box-sizing: content-box;
  height: var(--van-action-bar-height);
  background: var(--van-action-bar-background);
}
:host,
:root {
  --van-button-mini-height: 6.4vw;
  --van-button-mini-padding: 0 var(--van-padding-base);
  --van-button-mini-font-size: var(--van-font-size-xs);
  --van-button-small-height: 8.53333vw;
  --van-button-small-padding: 0 var(--van-padding-xs);
  --van-button-small-font-size: var(--van-font-size-sm);
  --van-button-normal-padding: 0 4vw;
  --van-button-normal-font-size: var(--van-font-size-md);
  --van-button-large-height: 13.33333vw;
  --van-button-default-height: 11.73333vw;
  --van-button-default-line-height: 1.2;
  --van-button-default-font-size: var(--van-font-size-lg);
  --van-button-default-color: var(--van-text-color);
  --van-button-default-background: var(--van-background-2);
  --van-button-default-border-color: var(--van-gray-4);
  --van-button-primary-color: var(--van-white);
  --van-button-primary-background: var(--van-primary-color);
  --van-button-primary-border-color: var(--van-primary-color);
  --van-button-success-color: var(--van-white);
  --van-button-success-background: var(--van-success-color);
  --van-button-success-border-color: var(--van-success-color);
  --van-button-danger-color: var(--van-white);
  --van-button-danger-background: var(--van-danger-color);
  --van-button-danger-border-color: var(--van-danger-color);
  --van-button-warning-color: var(--van-white);
  --van-button-warning-background: var(--van-warning-color);
  --van-button-warning-border-color: var(--van-warning-color);
  --van-button-border-width: var(--van-border-width);
  --van-button-radius: var(--van-radius-md);
  --van-button-round-radius: var(--van-radius-max);
  --van-button-plain-background: var(--van-white);
  --van-button-disabled-opacity: var(--van-disabled-opacity);
  --van-button-icon-size: 1.2em;
  --van-button-loading-icon-size: 5.33333vw;
}
.van-theme-dark {
  --van-button-plain-background: transparent;
}
.van-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: var(--van-button-default-height);
  margin: 0;
  padding: 0;
  font-size: var(--van-button-default-font-size);
  line-height: var(--van-button-default-line-height);
  text-align: center;
  border-radius: var(--van-button-radius);
  cursor: pointer;
  transition: opacity var(--van-duration-fast);
  -webkit-appearance: none;
  -webkit-font-smoothing: auto;
}
.van-button:before {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: var(--van-black);
  border: inherit;
  border-color: var(--van-black);
  border-radius: inherit;
  transform: translate(-50%, -50%);
  opacity: 0;
  content: " ";
}
.van-button:active:before {
  opacity: 0.1;
}
.van-button--disabled:before,
.van-button--loading:before {
  display: none;
}
.van-button--default {
  color: var(--van-button-default-color);
  background: var(--van-button-default-background);
  border: var(--van-button-border-width) solid
    var(--van-button-default-border-color);
}
.van-button--primary {
  color: var(--van-button-primary-color);
  background: var(--van-button-primary-background);
  border: var(--van-button-border-width) solid
    var(--van-button-primary-border-color);
}
.van-button--success {
  color: var(--van-button-success-color);
  background: var(--van-button-success-background);
  border: var(--van-button-border-width) solid
    var(--van-button-success-border-color);
}
.van-button--danger {
  color: var(--van-button-danger-color);
  background: var(--van-button-danger-background);
  border: var(--van-button-border-width) solid
    var(--van-button-danger-border-color);
}
.van-button--warning {
  color: var(--van-button-warning-color);
  background: var(--van-button-warning-background);
  border: var(--van-button-border-width) solid
    var(--van-button-warning-border-color);
}
.van-button--plain {
  background: var(--van-button-plain-background);
}
.van-button--plain.van-button--primary {
  color: var(--van-button-primary-background);
}
.van-button--plain.van-button--success {
  color: var(--van-button-success-background);
}
.van-button--plain.van-button--danger {
  color: var(--van-button-danger-background);
}
.van-button--plain.van-button--warning {
  color: var(--van-button-warning-background);
}
.van-button--large {
  width: 100%;
  height: var(--van-button-large-height);
}
.van-button--normal {
  padding: var(--van-button-normal-padding);
  font-size: var(--van-button-normal-font-size);
}
.van-button--small {
  height: var(--van-button-small-height);
  padding: var(--van-button-small-padding);
  font-size: var(--van-button-small-font-size);
}
.van-button__loading {
  color: inherit;
  font-size: inherit;
}
.van-button__loading .van-loading__spinner {
  color: currentColor;
  width: var(--van-button-loading-icon-size);
  height: var(--van-button-loading-icon-size);
}
.van-button--mini {
  height: var(--van-button-mini-height);
  padding: var(--van-button-mini-padding);
  font-size: var(--van-button-mini-font-size);
}
.van-button--mini + .van-button--mini {
  margin-left: var(--van-padding-base);
}
.van-button--block {
  display: block;
  width: 100%;
}
.van-button--disabled {
  cursor: not-allowed;
  opacity: var(--van-button-disabled-opacity);
}
.van-button--loading {
  cursor: default;
}
.van-button--round {
  border-radius: var(--van-button-round-radius);
}
.van-button--square {
  border-radius: 0;
}
.van-button__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.van-button__content:before {
  content: " ";
}
.van-button__icon {
  font-size: var(--van-button-icon-size);
  line-height: inherit;
}
.van-button__icon + .van-button__text,
.van-button__loading + .van-button__text,
.van-button__text + .van-button__icon,
.van-button__text + .van-button__loading {
  margin-left: var(--van-padding-base);
}
.van-button--hairline {
  border-width: 0;
}
.van-button--hairline:after {
  border-color: inherit;
  border-radius: calc(var(--van-button-radius) * 2);
}
.van-button--hairline.van-button--round:after {
  border-radius: var(--van-button-round-radius);
}
.van-button--hairline.van-button--square:after {
  border-radius: 0;
}
:host,
:root {
  --van-action-bar-button-height: 10.66667vw;
  --van-action-bar-button-warning-color: var(--van-gradient-orange);
  --van-action-bar-button-danger-color: var(--van-gradient-red);
}
.van-action-bar-button {
  flex: 1;
  height: var(--van-action-bar-button-height);
  font-weight: var(--van-font-bold);
  font-size: var(--van-font-size-md);
  border: none;
  border-radius: 0;
}
.van-action-bar-button--first {
  margin-left: 1.33333vw;
  border-top-left-radius: var(--van-radius-max);
  border-bottom-left-radius: var(--van-radius-max);
}
.van-action-bar-button--last {
  margin-right: 1.33333vw;
  border-top-right-radius: var(--van-radius-max);
  border-bottom-right-radius: var(--van-radius-max);
}
.van-action-bar-button--warning {
  background: var(--van-action-bar-button-warning-color);
}
.van-action-bar-button--danger {
  background: var(--van-action-bar-button-danger-color);
}
@media (max-width: 321px) {
  .van-action-bar-button {
    font-size: 13px;
  }
}
:host,
:root {
  --van-dialog-width: 85.33333vw;
  --van-dialog-small-screen-width: 90%;
  --van-dialog-font-size: var(--van-font-size-lg);
  --van-dialog-transition: var(--van-duration-base);
  --van-dialog-radius: 4.26667vw;
  --van-dialog-background: var(--van-background-2);
  --van-dialog-header-font-weight: var(--van-font-bold);
  --van-dialog-header-line-height: 6.4vw;
  --van-dialog-header-padding-top: 6.93333vw;
  --van-dialog-header-isolated-padding: var(--van-padding-lg) 0;
  --van-dialog-message-padding: var(--van-padding-lg);
  --van-dialog-message-font-size: var(--van-font-size-md);
  --van-dialog-message-line-height: var(--van-line-height-md);
  --van-dialog-message-max-height: 60vh;
  --van-dialog-has-title-message-text-color: var(--van-gray-7);
  --van-dialog-has-title-message-padding-top: var(--van-padding-xs);
  --van-dialog-button-height: 12.8vw;
  --van-dialog-round-button-height: 9.6vw;
  --van-dialog-confirm-button-text-color: var(--van-primary-color);
}
.van-dialog {
  top: 45%;
  width: var(--van-dialog-width);
  overflow: hidden;
  font-size: var(--van-dialog-font-size);
  background: var(--van-dialog-background);
  border-radius: var(--van-dialog-radius);
  backface-visibility: hidden;
  transition: var(--van-dialog-transition);
  transition-property: transform, opacity;
}
@media (max-width: 321px) {
  .van-dialog {
    width: var(--van-dialog-small-screen-width);
  }
}
.van-dialog__header {
  color: var(--van-text-color);
  padding-top: var(--van-dialog-header-padding-top);
  font-weight: var(--van-dialog-header-font-weight);
  line-height: var(--van-dialog-header-line-height);
  text-align: center;
}
.van-dialog__header--isolated {
  padding: var(--van-dialog-header-isolated-padding);
}
.van-dialog__content--isolated {
  display: flex;
  align-items: center;
  min-height: 27.73333vw;
}
.van-dialog__message {
  color: var(--van-text-color);
  flex: 1;
  max-height: var(--van-dialog-message-max-height);
  padding: 6.93333vw var(--van-dialog-message-padding);
  overflow-y: auto;
  font-size: var(--van-dialog-message-font-size);
  line-height: var(--van-dialog-message-line-height);
  white-space: pre-wrap;
  text-align: center;
  word-wrap: break-word;
  -webkit-overflow-scrolling: touch;
}
.van-dialog__message--has-title {
  padding-top: var(--van-dialog-has-title-message-padding-top);
  color: var(--van-dialog-has-title-message-text-color);
}
.van-dialog__message--left {
  text-align: left;
}
.van-dialog__message--right {
  text-align: right;
}
.van-dialog__message--justify {
  text-align: justify;
}
.van-dialog__footer {
  display: flex;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.van-dialog__cancel,
.van-dialog__confirm {
  flex: 1;
  height: var(--van-dialog-button-height);
  margin: 0;
  border: 0;
  border-radius: 0;
}
.van-dialog__confirm,
.van-dialog__confirm:active {
  color: var(--van-dialog-confirm-button-text-color);
}
.van-dialog--round-button .van-dialog__footer {
  position: relative;
  height: auto;
  padding: var(--van-padding-xs) var(--van-padding-lg) var(--van-padding-md);
}
.van-dialog--round-button .van-dialog__message {
  padding-bottom: var(--van-padding-md);
  color: var(--van-text-color);
}
.van-dialog--round-button .van-dialog__cancel,
.van-dialog--round-button .van-dialog__confirm {
  height: var(--van-dialog-round-button-height);
}
.van-dialog--round-button .van-dialog__confirm {
  color: var(--van-white);
}
.van-dialog--round-button .van-action-bar-button--first {
  border-top-left-radius: var(--van-radius-max);
  border-bottom-left-radius: var(--van-radius-max);
}
.van-dialog--round-button .van-action-bar-button--last {
  border-top-right-radius: var(--van-radius-max);
  border-bottom-right-radius: var(--van-radius-max);
}
.van-dialog-bounce-enter-from {
  transform: translate3d(0, -50%, 0) scale(0.7);
  opacity: 0;
}
.van-dialog-bounce-leave-active {
  transform: translate3d(0, -50%, 0) scale(0.9);
  opacity: 0;
}
:host,
:root {
  --van-notify-text-color: var(--van-white);
  --van-notify-padding: var(--van-padding-xs) var(--van-padding-md);
  --van-notify-font-size: var(--van-font-size-md);
  --van-notify-line-height: var(--van-line-height-md);
  --van-notify-primary-background: var(--van-primary-color);
  --van-notify-success-background: var(--van-success-color);
  --van-notify-danger-background: var(--van-danger-color);
  --van-notify-warning-background: var(--van-warning-color);
}
.van-notify {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: var(--van-notify-padding);
  color: var(--van-notify-text-color);
  font-size: var(--van-notify-font-size);
  line-height: var(--van-notify-line-height);
  white-space: pre-wrap;
  text-align: center;
  word-wrap: break-word;
}
.van-notify--primary {
  background: var(--van-notify-primary-background);
}
.van-notify--success {
  background: var(--van-notify-success-background);
}
.van-notify--danger {
  background: var(--van-notify-danger-background);
}
.van-notify--warning {
  background: var(--van-notify-warning-background);
}
:host,
:root {
  --van-image-placeholder-text-color: var(--van-text-color-2);
  --van-image-placeholder-font-size: var(--van-font-size-md);
  --van-image-placeholder-background: var(--van-background);
  --van-image-loading-icon-size: 8.53333vw;
  --van-image-loading-icon-color: var(--van-gray-4);
  --van-image-error-icon-size: 8.53333vw;
  --van-image-error-icon-color: var(--van-gray-4);
}
.van-image {
  position: relative;
  display: inline-block;
}
.van-image--round {
  overflow: hidden;
  border-radius: var(--van-radius-max);
}
.van-image--round .van-image__img {
  border-radius: inherit;
}
.van-image--block {
  display: block;
}
.van-image__error,
.van-image__img,
.van-image__loading {
  display: block;
  width: 100%;
  height: 100%;
}
.van-image__error,
.van-image__loading {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--van-image-placeholder-text-color);
  font-size: var(--van-image-placeholder-font-size);
  background: var(--van-image-placeholder-background);
}
.van-image__loading-icon {
  color: var(--van-image-loading-icon-color);
  font-size: var(--van-image-loading-icon-size);
}
.van-image__error-icon {
  color: var(--van-image-error-icon-color);
  font-size: var(--van-image-error-icon-size);
}
:host,
:root {
  --van-swipe-indicator-size: 1.6vw;
  --van-swipe-indicator-margin: var(--van-padding-sm);
  --van-swipe-indicator-active-opacity: 1;
  --van-swipe-indicator-inactive-opacity: 0.3;
  --van-swipe-indicator-active-background: var(--van-primary-color);
  --van-swipe-indicator-inactive-background: var(--van-border-color);
}
.van-swipe {
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  cursor: grab;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
.van-swipe__track {
  display: flex;
  height: 100%;
  transition-property: transform;
}
.van-swipe__track--vertical {
  flex-direction: column;
}
.van-swipe__indicators {
  position: absolute;
  bottom: var(--van-swipe-indicator-margin);
  left: 50%;
  display: flex;
  transform: translate(-50%);
}
.van-swipe__indicators--vertical {
  top: 50%;
  bottom: auto;
  left: var(--van-swipe-indicator-margin);
  flex-direction: column;
  transform: translateY(-50%);
}
.van-swipe__indicators--vertical .van-swipe__indicator:not(:last-child) {
  margin-bottom: var(--van-swipe-indicator-size);
}
.van-swipe__indicator {
  width: var(--van-swipe-indicator-size);
  height: var(--van-swipe-indicator-size);
  background-color: var(--van-swipe-indicator-inactive-background);
  border-radius: 100%;
  opacity: var(--van-swipe-indicator-inactive-opacity);
  transition: opacity var(--van-duration-fast),
    background-color var(--van-duration-fast);
}
.van-swipe__indicator:not(:last-child) {
  margin-right: var(--van-swipe-indicator-size);
}
.van-swipe__indicator--active {
  background-color: var(--van-swipe-indicator-active-background);
  opacity: var(--van-swipe-indicator-active-opacity);
}
.van-swipe-item {
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
}
:host,
:root {
  --van-image-preview-index-text-color: var(--van-white);
  --van-image-preview-index-font-size: var(--van-font-size-md);
  --van-image-preview-index-line-height: var(--van-line-height-md);
  --van-image-preview-index-text-shadow: 0 1px 1px var(--van-gray-8);
  --van-image-preview-overlay-background: rgba(0, 0, 0, 0.9);
  --van-image-preview-close-icon-size: 5.86667vw;
  --van-image-preview-close-icon-color: var(--van-gray-5);
  --van-image-preview-close-icon-margin: var(--van-padding-md);
  --van-image-preview-close-icon-z-index: 1;
}
.van-image-preview {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: none;
  background-color: transparent;
  transform: none;
}
.van-image-preview__swipe {
  height: 100%;
}
.van-image-preview__swipe-item {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.van-image-preview__cover {
  position: absolute;
  top: 0;
  left: 0;
}
.van-image-preview__image,
.van-image-preview__image-wrap {
  width: 100%;
  transition-property: transform;
}
.van-image-preview__image--vertical,
.van-image-preview__image-wrap--vertical {
  width: auto;
  height: 100%;
}
.van-image-preview__image img,
.van-image-preview__image video,
.van-image-preview__image-wrap img,
.van-image-preview__image-wrap video {
  -webkit-user-drag: none;
}
.van-image-preview__image .van-image__error,
.van-image-preview__image-wrap .van-image__error {
  top: 30%;
  height: 40%;
}
.van-image-preview__image .van-image__error-icon,
.van-image-preview__image-wrap .van-image__error-icon {
  font-size: 9.6vw;
}
.van-image-preview__image .van-image__loading,
.van-image-preview__image-wrap .van-image__loading {
  background-color: transparent;
}
.van-image-preview__index {
  position: absolute;
  top: var(--van-padding-md);
  left: 50%;
  color: var(--van-image-preview-index-text-color);
  font-size: var(--van-image-preview-index-font-size);
  line-height: var(--van-image-preview-index-line-height);
  text-shadow: var(--van-image-preview-index-text-shadow);
  transform: translate(-50%);
}
.van-image-preview__overlay {
  background: var(--van-image-preview-overlay-background);
}
.van-image-preview__close-icon {
  position: absolute;
  z-index: var(--van-image-preview-close-icon-z-index);
  color: var(--van-image-preview-close-icon-color);
  font-size: var(--van-image-preview-close-icon-size);
}
.van-image-preview__close-icon--top-left {
  top: var(--van-image-preview-close-icon-margin);
  left: var(--van-image-preview-close-icon-margin);
}
.van-image-preview__close-icon--top-right {
  top: var(--van-image-preview-close-icon-margin);
  right: var(--van-image-preview-close-icon-margin);
}
.van-image-preview__close-icon--bottom-left {
  bottom: var(--van-image-preview-close-icon-margin);
  left: var(--van-image-preview-close-icon-margin);
}
.van-image-preview__close-icon--bottom-right {
  right: var(--van-image-preview-close-icon-margin);
  bottom: var(--van-image-preview-close-icon-margin);
}


