import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-fast-image-purple' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type FastImagePurpleProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'FastImagePurpleView';

export const FastImagePurpleView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<FastImagePurpleProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
