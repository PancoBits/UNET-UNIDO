-- Insertar datos de ejemplo para la base de datos



-- Tabla client
insert into client (
   client_id,
   name,
   email,
   password,
   avatar
) values ( 1,
           'John Doe',
           'johndoe@example.com',
           '1234567890',
           null );
insert into client (
   client_id,
   name,
   email,
   password,
   avatar
) values ( 2,
           'Ana Gómez',
           'ana@example.com',
           'abcd',
           null );

-- Tabla comments
insert into comments (
   comment_id,
   client_comment_id,
   text
) values ( 1,
           1,
           '¡Buen post!' );
insert into comments (
   comment_id,
   client_comment_id,
   text
) values ( 2,
           2,
           'Interesante experiencia.' );

-- Tabla reactions
insert into reactions (
   reactions_id,
   client_reaction_id,
   type
) values ( 1,
           1,
           'like' );
insert into reactions (
   reactions_id,
   client_reaction_id,
   type
) values ( 2,
           2,
           'love' );

-- Tabla publication
insert into publication (
   publication_id,
   client_id,
   text,
   multimedia,
   label,
   comment_id,
   reactions_id
) values ( 1,
           1,
           'Mi primer publicación',
           null,
           'general',
           1,
           1 );
insert into publication (
   publication_id,
   client_id,
   text,
   multimedia,
   label,
   comment_id,
   reactions_id
) values ( 2,
           2,
           '¡Hola mundo!',
           null,
           'saludo',
           2,
           2 );

commit;