import { Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { IconsProps } from '../utils/types';



export default function IconsComp({ name, size, color, pressFn }: IconsProps) {
  return (
    <Pressable
        style={({pressed}) => [
            {
                opacity: pressed ? 0.6 : 1
            }
        ]}
        onPress={pressFn}
    >
        <Icon name={name} size={size} color={color} />
    </Pressable>
  )
}
