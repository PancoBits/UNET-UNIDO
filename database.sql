create table client (
   client_id number not null,
   name      varchar2(255) not null,
   email     varchar2(255) not null,
   password  varchar2(255) not null,
   avatar    blob,
   constraint client_pk primary key ( client_id )
);

create table comments (
   comment_id        number,
   client_comment_id number not null,
   text              varchar2(255) not null,
   constraint comment_pk primary key ( comment_id )
);

create table reactions (
   reactions_id       number,
   client_reaction_id number not null unique,
   type               varchar2(50) not null,
   constraint reactions_pk primary key ( reactions_id )
);


create table publication (
   publication_id number,
   client_id      number not null,
   text           varchar2(255) not null,
   multimedia     blob,
   label          varchar2(50),
   comment_id     number not null,
   reactions_id   number not null,
   constraint publications_pk primary key ( publication_id ),
   constraint publications_client_fk foreign key ( client_id )
      references client ( client_id )
         on delete cascade,
   constraint p_comment_pk foreign key ( comment_id )
      references comments ( comment_id ),
   constraint p_reactions_pk foreign key ( reactions_id )
      references reactions ( reactions_id )
);