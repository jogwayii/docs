---
title: 'Email'
sidebar_label: 'Email'
sidebar_position: 2
id: email
---


#### System Definition configuration

The following configuration items can be defined in order to provide SMTP server connection details, and to configure email service-related features.

```kotlin
//Generated emails sent as this email address by default
item(name = "SYSTEM_DEFAULT_EMAIL", value = "notifications@genesis.global" )
//Display name of default email address
item(name = "SYSTEM_DEFAULT_USER_NAME", value = "GenesisGlobal" )

//SMTP server connection details

item(name = "EMAIL_SMTP_HOST", value = "smtp.office365.com" )
item(name = "EMAIL_SMTP_PORT", value = "587" )
//Credentials for SMTP server, note that the user will need to be permitted to send as the SYSTEM_DEFAULT_EMAIL on the SMTP server where values are different
item(name = "EMAIL_SMTP_USER", value = "myuser@genesis.global" )
item(name = "EMAIL_SMTP_PW", value = "NOTAPASSWORD" )
item(name = "EMAIL_SMTP_PROTOCOL", value = "SMTP_TLS" )

//Set to false if the NOTIFY record severity should be added into the email subject/body
item(name = "EMAIL_SUPPRESS_SEVERITY_TEXT", value = "true" )
```

#### Database configuration

##### GATEWAY

| Field Name | Usage |
| --- | --- |
| GATEWAY_ID | A Unique name for the gateway which can be referenced in the NOTIFY_ROUTE   |
| GATEWAY_TYPE | Set to "EmailDistribution" |
| GATEWAY_VALUE | Static email distribution list specified for this gatway as a [JSON Structure](#GATEWAY_VALUE-JSON-Structure)  |
| INCOMING_TOPIC | Currently not used for Email |

#### GATEWAY_VALUE JSON Structure
```json
{
  "emailDistribution": {
    "to": ["jason <jason@email.com>", "carol@email.com>"],
    "cc": ["susan@email.com", "Tom <tom@email.com>"],
    "bcc": []
} 
```

note: when [SendIt] to send data to the database eg  `SendIt -t GATEWAY.CSV`, which use quotes to help delimit data you need to 
escape quote embedding in text like JSON values and remove new lines.

eg: here we are setting up an empty distribution list.

```text
GATEWAY_ID,GATEWAY_TYPE,GATEWAY_VALUE,INCOMING_TOPIC
"EMAIL1","EmailDistribution","{ \"emailDistribution\" : { \"to\" : [ ], \"cc\" : [ ], \"bcc\" : [ ] } }",
```

##### NOTIFY_ROUTE
| Field Name | Usage |
| --- | --- |
| ENTITY_ID | Genesis User sending message, null implies System |
| ENTITY_ID_TYPE | Enum of "USER_NAME", "PROFILE_NAME", "GATEWAY" |
| TOPIC_MATCH | Topic that should match that will forward to the GATEWAY |
| GATEWAY_ID | The Gateway that matched topic messages will be sent to |


##### NOTIFY
| Field Name | Usage |
| --- | --- |
| SENDER | Genesis User sending message, null implies System |
| TOPIC | The Topic to broadcast this message |
| BODY | Contents of message, for Email it should follow the [JSON Structure](#NOTIFY.BODY-JSON-Structure) |
| NOTIFY_COMPRESSION_TYPE | Used internally by Genesis, indicates if the body of the message is compressed |
| APPLICATION_REF | Currently not used for Email |

#### NOTIFY.BODY JSON Structure
```json
{
  "emailDistribution": {
    "to": ["jason <jason@email.com>", "carol@email.com>"],
    "cc": ["susan@email.com", "Tom <tom@email.com>"],
    "bcc": [],
    "contents" : "Content of Message Here"
} 
```

When sending HTML within the contents of a JSON string you should, escape any quotes, and remove or replace newlines

eg, doing this with Kotlin
```kotlin
htmlMailMessage.replaceAll("\"", "&quot;").replaceAll("\\R", "\\\\n");
```

The final outgoing emailDistribution with be the merger of the distribution list specified on the Notify message and 
the statically defined distribution list specified for any Gateway which messages may be routed too.
