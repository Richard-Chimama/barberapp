import { Avatar, Box, Typography } from "@mui/material";
import * as S from './style'

interface ListItemProp {
  avatar: string;
  name: string;
  link: string;
}

const hardData: ListItemProp[] = [
  {
    avatar: "https://example.com",
    name: "Erick Tintin",
    link: "moving forward",
  },
  {
    avatar: "https://example.com",
    name: "Erick Tintin",
    link: "moving forward",
  },
];

const ListItem = ({ avatar, name, link }: ListItemProp) => {
  return (
    <S.ListItemContainer onClick={() => alert(link)}>
      <Avatar src={avatar} alt="user image" />
      <S.ListItemLabel>{name}</S.ListItemLabel>
    </S.ListItemContainer>
  );
};

const ListComponent = () => {
  return (
    <S.ListComponentConainer>
      {
      hardData.map((item, index) => 
        <ListItem
          key={index}
          avatar={item.avatar}
          name={item.name}
          link={item.link}
        />
      )}
    </S.ListComponentConainer>
  );
};

export default ListComponent;
