import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar Perfil</EditButton>

              <h1>Yuri Oliveira</h1>
              <h2>@yuri_oliver</h2>

              <p>   
                Desenvolvedor Front-End, Estudante da <a href="www.rocketseat.com.br">@Rocketseat</a>
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                      São Paulo, Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido(a) em 05 de Março de 1999
                  </li>
              </ul>

              <Followage>
                  <span>
                      Seguindo <strong>05</strong>
                  </span>
                  <span>
                    <strong>512 </strong> seguidores 
                  </span>
              </Followage>

          </ProfileData>

      </Container>
  );
}

export default ProfilePage;