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

| props     | value                                                 | description                                  |
| --------- | ----------------------------------------------------- | -------------------------------------------- |
| color     | CSSProperties['color']                                | Badge 컴포넌트 내부 색상입니다.              |
| textColor | CSSProperties['color']                                | Badge 컴포넌트에 들어갈 텍스트의 색상입니다. |
| size?     | `xs` , `sm`, `md` , `lg` , `xl`<br /> (default: `sm`) | Badge 컴포넌트에 들어갈 텍스트의 크기입니다. |

### Example

```jsx
<Badge color="#000" textColor="#fff" size="md">뱃지</Badge>
<Badge color="#000" textColor="#fff">뱃지</Badge>
```

## BottomSheet

아래에서 위로 올라오는 바텀시트 컴포넌트입니다.

### Props

| props   | value    | description                                    |
| ------- | -------- | ---------------------------------------------- |
| close() | function | BottomSheet 컴포넌트를 닫는 함수를 전달합니다. |

### Example

```tsx
const ref = useRef<HTMLDialogElement>(null);

const openBottomSheet = () => {
  ref.current?.open();
};

const closeBottomSheet = () => {
  ref.current?.close();
};

return (
  <BottomSheet close={closeBottomSheet} ref={ref}>
    <div>바텀시트 컴포넌트</div>
  </BottomSheet>
);
```

## Button

버튼 컴포넌트입니다.

### Props

| props      | value                                              | description                                                                                                   |
| ---------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| color      | CSSProperties['color']                             | Button 컴포넌트의 색상입니다.                                                                                 |
| textColor? | CSSProperties['color']                             | Button 컴포넌트의 텍스트 색상입니다.                                                                          |
| variant    | `outlined`, `filled` <br />(default: `filled`)     | Button 컴포넌트의 스타일로 배경색 없이 아웃라인이 있는지, 배경색이 있고 아웃라인이 없는지 설정할 수 있습니다. |
| size?      | `xs`, `sm`, `md`, `lg`, `xl` <br />(default: `md`) | Button 컴포넌트의 크기입니다.                                                                                 |

### Example

```jsx
<Button color="#000" textColor="#fff" variant="filled" size="xs">버튼</Button>
<Button color="#000" variant="outlined">버튼</Button>
```

## Divider

화면 구역을 나누는 선 컴포넌트입니다.

### Props

| props    | value                                                      | description                                                 |
| -------- | ---------------------------------------------------------- | ----------------------------------------------------------- |
| variant? | `default`, `strong`, `disabled` <br />(default: `default`) | Divider 컴포넌트의 종류입니다. 강조의 정도 차이가 있습니다. |
| width?   | string <br />(default: 100%)                               | Divider 컴포넌트의 길이입니다.                              |

### Example

```jsx
<Divider variant="strong" width="50%" />
<Divider />
```

## Heading

HTML heading 태그를 사용하는 컴포넌트입니다.

### Props

| props     | value                                 | description                                 |
| --------- | ------------------------------------- | ------------------------------------------- |
| children? | ReactNode                             | Heading 컴포넌트의 자식 컴포넌트입니다.     |
| size?     | `xs`, `sm`, `md`, `lg`, `xl`          | Heading 컴포넌트의 폰트 크기입니다.         |
| weight?   | `light`, `regular`, `bold`            | Heading 컴포넌트의 폰트 가중치입니다.       |
| css?      | CSSProp                               | Heading 컴포넌트에 적용할 CSS 스타일입니다. |
| as?       | `h1` ,`h2`, `h3`<br />(default: `h1`) | Heading 컴포넌트의 HTML 태그입니다.         |

### Example

```jsx
<Heading>로망오우타해황</Heading>
<Heading as="h2">로망오우타해황</Heading>
<Heading as="h3" size="xl" weight='regular'>로망오우타해황</Heading>
<Heading as="h3" css='color: red;'>로망오우타해황</Heading>
```

## Link

다른 URL로 연결하는 컴포넌트입니다.
`react-router-dom`과 함께 사용할 수 있습니다.

### Props

| props       | value                                                                                           | description                                                           |
| ----------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| isExternal? | boolean<br/>(default: false)                                                                    | Link 컴포넌트의 링크 클릭 시 새로운 탭으로 열도록 선택할 수 있습니다. |
| block       | boolean<br/>(default: false)                                                                    | Link 컴포넌트의 디스플레이 속성이 block인지 선택할 수 있습니다.       |
| css?        | CSSProp                                                                                         | Link 컴포넌트에 적용할 CSS 스타일입니다.                              |
| as?         | `a` ,`Link(react-router-dom의 Link)`, `NavLink(react-router-dom의 NavLink)`<br />(default: `a`) | Link 컴포넌트로 사용할 HTML 태그 또는 외부 링크 컴포넌트입니다.       |

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

## Spacing

화면 구역을 나누는 여백 컴포넌트입니다.

### Props

| props      | value                                                | description                    |
| ---------- | ---------------------------------------------------- | ------------------------------ |
| direction? | `vertical`, `horizontal` <br />(default: `vertical`) | Spacing 컴포넌트의 방향입니다. |
| size       | number                                               | Spacing 컴포넌트의 크기입니다. |

### Example

```jsx
<Spacing size={10} />
<Spacing direction="horizontal" size={10} />
```

## Text

텍스트 컴포넌트입니다.

### Props

| props       | value                                              | description                              |
| ----------- | -------------------------------------------------- | ---------------------------------------- |
| children?   | ReactNode                                          | Text 컴포넌트의 자식 컴포넌트입니다.     |
| element?    | `p`, `span`                                        | Text 컴포넌트의 HTML 태그입니다.         |
| size?       | `xs`, `sm`, `md`, `lg`, `xl` <br />(default: `md`) | Text 컴포넌트의 폰트 크기입니다.         |
| weight?     | `light`, `regular`, `bold`<br />(default: regular) | Text 컴포넌트의 폰트 가중치입니다.       |
| lineHeight? | `xs`,`sm`, `md`, `xl` <br />(default: `md`)        | Text 컴포넌트의 텍스트 높이입니다.       |
| color?      | CSSProperties['color'] <br />(default: ‘#232527’)  | Text 컴포넌트의 텍스트 색상입니다.       |
| align?      | `left`, `center`, `right` <br />(default: `left`)  | Text 컴포넌트의 텍스트 정렬입니다.       |
| css?        | CSSProp                                            | Text 컴포넌트에 적용할 CSS 스타일입니다. |
| as?         | `p` ,`span`<br />(default: `p`)                    | Text 컴포넌트의 HTML 태그입니다.         |

### Example

```jsx
<Text>로망오우타해황</Text>
<Text as="span">로망오우타해황</Text>
<Text weight="bold" size="xl">로망오우타해황</Text>
<Text css="color: red;">로망오우타해황</Text>
```
