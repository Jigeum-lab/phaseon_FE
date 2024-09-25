import { useContext } from 'react';
import { MainContext } from '@/context/MainContext';
import * as s from '@/style/main/CategoryStyle';
import { getFill } from '@/utils/getFill';
import { getStroke } from '@/utils/getStroke';
import { Icon } from '../common/Icon';

export default function Category() {
  const { currentCategory, setCurrentCategory, category } = useContext(MainContext);

  const icons = [
    'SmallProjectIcon',
    'AI',
    'SOCIAL_MEDIA',
    'PRODUCTIVITY',
    'HEALTH',
    'TRAVEL',
    'SOCIAL_EFFECT',
    'ENTERTAINMENT',
    'PERSONAL_BRANDING',
  ] as const;
  interface IconProps {
    name:
      | 'SmallProjectIcon'
      | 'AI'
      | 'SOCIAL_MEDIA'
      | 'PRODUCTIVITY'
      | 'HEALTH'
      | 'TRAVEL'
      | 'SOCIAL_EFFECT'
      | 'ENTERTAINMENT'
      | 'PERSONAL_BRANDING';
  }
  const iconWithFill = [0, 2, 3, 4, 5, 6, 8];
  return (
    <s.Section>
      <s.Title>카테고리</s.Title>
      <s.CategoryBox>
        {category.categorytext.map((text, index) => {
          const iconName = icons[index] as IconProps['name'];
          return (
            <s.Category
              key={index}
              $currentNum={index}
              $focus={currentCategory}
              onClick={() => {
                setCurrentCategory(index);
              }}
            >
              <Icon
                name={iconName}
                stroke={getStroke(index, iconWithFill, currentCategory)}
                fill={getFill(index, iconWithFill, currentCategory)}
                width={20}
                height={21}
              />
              <p>{text}</p>
            </s.Category>
          );
        })}
      </s.CategoryBox>
    </s.Section>
  );
}
