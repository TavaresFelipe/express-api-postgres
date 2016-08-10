CREATE TABLE public.contacts
(
    id serial primary key,
    name character varying(50) NOT NULL,
    phone character varying(13) NOT NULL,
    description character varying(250) ,
    creation_date timestamp without time zone NOT NULL DEFAULT ('now'::text)::date,
    update_date timestamp without time zone NOT NULL DEFAULT ('now'::text)::date
)