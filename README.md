# 🥄 펀잇팀 디자인시스템 🎨

# Install

npm

```bash
npm install @fun-eat/design-system
```

yarn

```bash
yarn add @fun-eat/design-system
```

# FunEatProvider

`@fun-eat/design-system` 컴포넌트를 사용하기 위해서는 FunEatProvider로 감싸줘야합니다.

```jsx
//index.tsx

import FunEatProvider from '@fun-eat/design-system';

<FunEatProvider>
  <App />
</FunEatProvider>;
```

# Components

## Badge

작은 크기의 뱃지 컴포넌트입니다.

### Props

| props     | value                                  | description                                  |
| --------- | -------------------------------------- | -------------------------------------------- |
| element   | p, span<br />(default: span)           | Badge 컴포넌트의 element 타입입니다.         |
| color     | CSSProperties['color']                 | Badge 컴포넌트 내부 색상입니다.              |
| textColor | CSSProperties['color']                 | Badge 컴포넌트에 들어갈 텍스트의 색상입니다. |
| size?     | xs, sm, md, lg, xl<br /> (default: sm) | Badge 컴포넌트에 들어갈 텍스트의 크기입니다. |
| css?      | CSSProp                                | Badge 컴포넌트에 적용할 CSS 스타일입니다.    |

### Example

```tsx
<Badge color="#000" textColor="#fff" size="md">뱃지</Badge>
<Badge color="#000" textColor="#fff">뱃지</Badge>
```

<br />

## BottomSheet

아래에서 위로 올라오는 바텀시트 컴포넌트입니다.

@fun-eat/design-system에서 제공하는 useBottomSheet와 사용해야 합니다.

### Props

| props     | value    | description                                    |
| --------- | -------- | ---------------------------------------------- |
| maxWidth? | string   | BottomSheet 컴포넌트의 최대 폭입니다.          |
| isClosing | boolean  | BottomSheet 컴포넌트가 닫히는지 여부입니다.    |
| close()   | function | BottomSheet 컴포넌트를 닫는 함수를 전달합니다. |

### Example

```tsx
import { useBottomSheet } from '@fun-eat/design-system';

const Parent = () => {
  const { ref, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();

  return (
    <>
      <Button type="button" onClick={handleOpenBottomSheet}>
        바텀시트 열기
      </Button>
      <BottomSheet ref={ref} isClosing={isClosing} close={handleCloseBottomSheet}>
        <div>바텀시트 컴포넌트</div>
      </BottomSheet>
    </>
  );
};
```

<br />

## Button

버튼 컴포넌트입니다.

### Props

| props         | value                                                 | description                                                                                                                  |
| ------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| customWidth?  | string<br /> (default: 120px)                         | Button 컴포넌트의 넓이입니다.                                                                                                |
| customHeight? | string<br /> (default: 40px)                          | Button 컴포넌트의 높이입니다.                                                                                                |
| color?        | color<br /> (default: primary)                        | Button 컴포넌트의 색상입니다.                                                                                                |
| textColor?    | color<br /> (default: default)                        | Button 컴포넌트의 텍스트 색상입니다.                                                                                         |
| size?         | xs, sm, md, lg, xl<br /> (default: md)                | Button 컴포넌트의 폰트 크기입니다.                                                                                           |
| weight?       | light, regular, bold<br /> (default: bold)            | Button 컴포넌트의 폰트 가중치입니다.                                                                                         |
| variant?      | outlined, filled, transparent<br /> (default: filled) | Button 컴포넌트의 스타일로 배경색 없이 아웃라인이 있는지, 배경색이 있고 아웃라인이 없는지, 투명 배경인지 설정할 수 있습니다. |
| css?          | CSSProp                                               | Button 컴포넌트에 적용할 CSS 스타일입니다.                                                                                   |

### Example

```jsx
<Button width="100%" height="20px" color="#000" textColor="#fff" size="sm" weight="regular" variant="filled">버튼</Button>
<Button>버튼</Button>
```

<br />

## **Checkbox**

체크박스 컴포넌트입니다.

### Props

| props     | value                                      | description                              |
| --------- | ------------------------------------------ | ---------------------------------------- |
| size?     | xs, sm, md, lg, xl<br /> (default: md)     | Checkbox 컴포넌트의 체크박스 크기입니다. |
| fontSize? | xs, sm, md, lg, xl<br /> (default: md)     | Checkbox 컴포넌트의 폰트 크기입니다.     |
| weight?   | light, regular, bold<br /> (default: bold) | Checkbox 컴포넌트의 폰트 가중치입니다.   |
| tabIndex? | -1, 0, 1                                   | Checkbox 컴포넌트의 tabIndex입니다.      |

### Example

```jsx
<Checkbox />
<Checkbox size="xs">재구매 의사가 있으신가요?</Checkbox>
<Checkbox size="xl" fontSize="xl" weight="bold">재구매 의사가 있으신가요?</Checkbox>
```

<br />

## Divider

화면 구역을 나누는 선 컴포넌트입니다.

### Props

| props         | value                                                | description                                                 |
| ------------- | ---------------------------------------------------- | ----------------------------------------------------------- |
| variant?      | default , strong , disabled<br /> (default: default) | Divider 컴포넌트의 종류입니다. 강조의 정도 차이가 있습니다. |
| customWidth?  | string<br /> (default: 100%)                         | Divider 컴포넌트의 길이입니다.                              |
| customHeight? | string<br /> (default: 1px)                          | Divider 컴포넌트의 두께입니다.                              |
| css?          | CSSProp                                              | Divider 컴포넌트에 적용할 CSS 스타일입니다.                 |

### Example

```jsx
<Divider variant="strong" customWidth="50%" customHeight='4px' />
<Divider />
```

<br />

## Heading

HTML heading 태그를 사용하는 컴포넌트입니다.

### Props

| props     | value                         | description                                 |
| --------- | ----------------------------- | ------------------------------------------- |
| children? | ReactNode                     | Heading 컴포넌트의 자식 컴포넌트입니다.     |
| as?       | h1 ,h2, h3<br />(default: h1) | Heading 컴포넌트의 HTML 태그입니다.         |
| size?     | xs, sm, md, lg, xl            | Heading 컴포넌트의 폰트 크기입니다.         |
| weight?   | light, regular, bold          | Heading 컴포넌트의 폰트 가중치입니다.       |
| css?      | CSSProp                       | Heading 컴포넌트에 적용할 CSS 스타일입니다. |

### Example

```jsx
<Heading>로망오우타해황</Heading>
<Heading as="h2">로망오우타해황</Heading>
<Heading as="h3" size="xl" weight='regular'>로망오우타해황</Heading>
<Heading as="h3" css='color: red;'>로망오우타해황</Heading>
```

<br />

## Input

인풋 컴포넌트입니다.

### Props

| props         | value     | description                                   |
| ------------- | --------- | --------------------------------------------- |
| customWidth?  | string    | Input 컴포넌트의 너비값입니다.                |
| minWidth?     | string    | Input 컴포넌트의 최소 너비값입니다.           |
| isError?      | boolean   | Input value에 에러가 있는지 여부입니다.       |
| rightIcon?    | ReactNode | Input 컴포넌트 오른쪽에 위치할 아이콘입니다.  |
| errorMessage? | string    | isError가 true일 때 보여줄 에러 메시지입니다. |

### Example

```jsx
<Input
  customWidth="100%"
  onChange={modifyNickname}
/>
<Input
	customWidth="100%"
	rightIcon={
	  <Button customHeight="36px" color="white">
	    <SvgIcon variant="search" />
	  </Button>
	}
/>
```

<br />

## Link

다른 URL로 연결하는 컴포넌트입니다. `react-router-dom`과 함께 사용할 수 있습니다.

### Props

| props       | value                                                                                    | description                                                           |
| ----------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| as?         | a, Link(react-router-dom의 Link), NavLink(react-router-dom의 NavLink)<br /> (default: a) | Link 컴포넌트로 사용할 HTML 태그 또는 외부 링크 컴포넌트입니다.       |
| isExternal? | boolean<br /> (default: false)                                                           | Link 컴포넌트의 링크 클릭 시 새로운 탭으로 열도록 선택할 수 있습니다. |
| block       | boolean<br /> (default: false)                                                           | Link 컴포넌트의 디스플레이 속성이 block인지 선택할 수 있습니다.       |
| css?        | CSSProp                                                                                  | Link 컴포넌트에 적용할 CSS 스타일입니다.                              |

### Example

```jsx
<Link href='#'>링크로 이동합니다.</Link>
<Link href='#' isExternal></Link>
<Link href='#' isExternal block>링크로 이동합니다.</Link>

// react-router-dom을 사용한 예시
import {Link as RouterLink, NavLink} from 'react-router-dom'

<Link as={RouterLink} to='/'>링크로 이동합니다.</Link>
<Link as={NavLink} to='/' isExternal>링크로 이동합니다.</Link>
```

<br />

## Spacing

화면 구역을 나누는 여백 컴포넌트입니다.

### Props

| props      | value                                          | description                    |
| ---------- | ---------------------------------------------- | ------------------------------ |
| direction? | vertical, horizontal<br /> (default: vertical) | Spacing 컴포넌트의 방향입니다. |
| size       | number                                         | Spacing 컴포넌트의 크기입니다. |

### Example

```jsx
<Spacing size={10} />
<Spacing direction="horizontal" size={10} />
```

<br />

## Text

텍스트 컴포넌트입니다.

### Props

| props       | value                                             | description                              |
| ----------- | ------------------------------------------------- | ---------------------------------------- |
| children?   | ReactNode                                         | Text 컴포넌트의 자식 컴포넌트입니다.     |
| as?         | p, span<br /> (default: p)                        | Text 컴포넌트의 HTML 태그입니다.         |
| size?       | xs, sm, md, lg, xl<br /> (default: md)            | Text 컴포넌트의 폰트 크기입니다.         |
| weight?     | light, regular, bold<br />(default: regular)      | Text 컴포넌트의 폰트 가중치입니다.       |
| lineHeight? | xs, sm, md, lg, xl<br />(default: md)             | Text 컴포넌트의 텍스트 높이입니다.       |
| color?      | CSSProperties['color']<br /> (default: ‘#232527’) | Text 컴포넌트의 텍스트 색상입니다.       |
| align?      | left, center, right<br /> (default: left)         | Text 컴포넌트의 텍스트 정렬입니다.       |
| css?        | CSSProp                                           | Text 컴포넌트에 적용할 CSS 스타일입니다. |

### Example

```jsx
<Text>로망오우타해황</Text>
<Text as="span">로망오우타해황</Text>
<Text weight="bold" size="xl">로망오우타해황</Text>
<Text css="color: red;">로망오우타해황</Text>
```

<br />

## Textarea

멀티라인 텍스트 입력 컴포넌트입니다.

### Props

| props   | value                                                  | description                                      |
| ------- | ------------------------------------------------------ | ------------------------------------------------ |
| resize? | both, horizontal, vertical, none<br /> (default: both) | Textarea 컴포넌트의 크기 재조정 방향 설정입니다. |

### Example

```jsx
<Textarea />
<Textarea resize="vertical" rows={10} placeholder="값을 입력해주세요."/>
```
