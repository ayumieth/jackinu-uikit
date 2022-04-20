import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24px" height="24px" viewBox="0 0 32 34" {...props}>
      <path d="M16.0628 9.21094C14.2228 9.21094 12.4581 10.0061 11.157 11.4214C9.85594 12.8368 9.125 14.7564 9.125 16.7581C9.125 18.7597 9.85594 20.6793 11.157 22.0947C12.4581 23.5101 14.2228 24.3052 16.0628 24.3052C17.9028 24.3052 19.6674 23.5101 20.9685 22.0947C22.2696 20.6793 23.0005 18.7597 23.0005 16.7581C23.0005 14.7564 22.2696 12.8368 20.9685 11.4214C19.6674 10.0061 17.9028 9.21094 16.0628 9.21094Z" fill={props.fill}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16.0678 0.15625C16.4358 0.15625 16.7887 0.315278 17.0489 0.598351C17.3091 0.881423 17.4553 1.26535 17.4553 1.66568V3.1751C17.4553 3.57543 17.3091 3.95936 17.0489 4.24243C16.7887 4.5255 16.4358 4.68453 16.0678 4.68453C15.6998 4.68453 15.3468 4.5255 15.0866 4.24243C14.8264 3.95936 14.6802 3.57543 14.6802 3.1751V1.66568C14.6802 1.26535 14.8264 0.881423 15.0866 0.598351C15.3468 0.315278 15.6998 0.15625 16.0678 0.15625ZM3.98634 3.61737C4.24655 3.33439 4.59941 3.17543 4.96734 3.17543C5.33527 3.17543 5.68814 3.33439 5.94834 3.61737L8.02967 5.88151C8.28242 6.16619 8.42228 6.54747 8.41912 6.94324C8.41596 7.33901 8.27003 7.71759 8.01277 7.99745C7.7555 8.27731 7.40749 8.43606 7.04368 8.4395C6.67987 8.44293 6.32937 8.29079 6.06767 8.01584L3.98634 5.7517C3.72622 5.46864 3.58009 5.08478 3.58009 4.68453C3.58009 4.28429 3.72622 3.90043 3.98634 3.61737ZM28.1492 3.61737C28.4093 3.90043 28.5554 4.28429 28.5554 4.68453C28.5554 5.08478 28.4093 5.46864 28.1492 5.7517L26.0678 8.01584C25.9398 8.16 25.7867 8.27499 25.6174 8.3541C25.4482 8.43321 25.2661 8.47485 25.0819 8.47659C24.8976 8.47833 24.7149 8.44014 24.5444 8.36425C24.3739 8.28835 24.2189 8.17627 24.0886 8.03455C23.9584 7.89282 23.8553 7.72429 23.7856 7.53879C23.7158 7.35329 23.6807 7.15453 23.6823 6.9541C23.6839 6.75368 23.7222 6.55562 23.7949 6.37146C23.8676 6.1873 23.9733 6.02075 24.1058 5.88151L26.1872 3.61737C26.4474 3.33439 26.8002 3.17543 27.1682 3.17543C27.5361 3.17543 27.889 3.33439 28.1492 3.61737ZM0.804688 16.76C0.804687 16.3596 0.950876 15.9757 1.21109 15.6926C1.47131 15.4096 1.82424 15.2505 2.19224 15.2505H3.57979C3.94779 15.2505 4.30072 15.4096 4.56094 15.6926C4.82116 15.9757 4.96734 16.3596 4.96734 16.76C4.96734 17.1603 4.82116 17.5442 4.56094 17.8273C4.30072 18.1103 3.94779 18.2694 3.57979 18.2694H2.19224C1.82424 18.2694 1.47131 18.1103 1.21109 17.8273C0.950876 17.5442 0.804688 17.1603 0.804688 16.76ZM27.1682 16.76C27.1682 16.3596 27.3144 15.9757 27.5746 15.6926C27.8348 15.4096 28.1877 15.2505 28.5557 15.2505H29.9433C30.3113 15.2505 30.6642 15.4096 30.9244 15.6926C31.1846 15.9757 31.3308 16.3596 31.3308 16.76C31.3308 17.1603 31.1846 17.5442 30.9244 17.8273C30.6642 18.1103 30.3113 18.2694 29.9433 18.2694H28.5557C28.1877 18.2694 27.8348 18.1103 27.5746 17.8273C27.3144 17.5442 27.1682 17.1603 27.1682 16.76ZM8.02967 25.5041C8.28979 25.7871 8.43593 26.171 8.43593 26.5712C8.43593 26.9715 8.28979 27.3553 8.02967 27.6384L5.94834 29.9025C5.68665 30.1775 5.33615 30.3296 4.97234 30.3262C4.60852 30.3228 4.26051 30.164 4.00325 29.8841C3.74598 29.6043 3.60006 29.2257 3.59689 28.8299C3.59373 28.4342 3.73359 28.0529 3.98634 27.7682L6.06767 25.5041C6.32788 25.2211 6.68074 25.0621 7.04867 25.0621C7.4166 25.0621 7.76946 25.2211 8.02967 25.5041ZM24.1058 25.5041C24.366 25.2211 24.7189 25.0621 25.0868 25.0621C25.4548 25.0621 25.8076 25.2211 26.0678 25.5041L28.1492 27.7682C28.4019 28.0529 28.5418 28.4342 28.5386 28.8299C28.5355 29.2257 28.3895 29.6043 28.1323 29.8841C27.875 30.164 27.527 30.3228 27.1632 30.3262C26.7994 30.3296 26.4489 30.1775 26.1872 29.9025L24.1058 27.6384C23.8457 27.3553 23.6996 26.9715 23.6996 26.5712C23.6996 26.171 23.8457 25.7871 24.1058 25.5041ZM16.0678 28.8354C16.4358 28.8354 16.7887 28.9944 17.0489 29.2775C17.3091 29.5605 17.4553 29.9445 17.4553 30.3448V31.8542C17.4553 32.2545 17.3091 32.6385 17.0489 32.9216C16.7887 33.2046 16.4358 33.3637 16.0678 33.3637C15.6998 33.3637 15.3468 33.2046 15.0866 32.9216C14.8264 32.6385 14.6802 32.2545 14.6802 31.8542V30.3448C14.6802 29.9445 14.8264 29.5605 15.0866 29.2775C15.3468 28.9944 15.6998 28.8354 16.0678 28.8354Z" fill={props.fill}/>
    </Svg>
  );
};

export default Icon;
