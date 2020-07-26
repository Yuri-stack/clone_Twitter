import React from 'react';

import { 
  Container, 
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
 } from './styles';

const tweet: React.FC = () => {
  return (
    <Container>
      
      <Retweeted>
        <RocketseatIcon />
        Você Retwettou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>

          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>25 de Jul</time>
          </Header>

          <Description>Foguete não tem ré</Description>

          <ImageContent />

          <Icons>

            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>

          </Icons>

        </Content>

      </Body>

    </Container>
  );
}

export default tweet;