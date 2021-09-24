# Service Definitions

In the same way each product has a \*-processes.xml config file, it should also have a \*-service-definitions.xml file. This file is where the developer specifies the ports of the various processes. These are the ports used to communicate between processes internally

```xml
<configuration>
    <service host="localhost" name="GENESIS_CLUSTER" port="8510"/>
    <service host="localhost" name="GENESIS_WEBMON" port="8511"/>
    <service host="localhost" name="GENESIS_WEB_ADAPTER" port="8512"/>
</configuration>
```

When `genesisInstall` is executed, all products have their \*-service-definitions.xml files compiled into a system-wide **$GC/global-service-definitions.xml**. Take the following example of a global-service-definitions.xml file when we have the *auth*, *dta* and *gcom* products installed:

```xml
<configuration>
    <service external="false" host="localhost" name="GENESIS_AUTH_DATASERVER" port="8502" secure="false"/>
    <service external="false" host="localhost" name="GENESIS_AUTH_MANAGER" port="8501" secure="false"/>
    <service external="false" host="localhost" name="GENESIS_AUTH_PERMS" port="8503" secure="false"/>
    <service external="false" host="localhost" name="GENESIS_CLUSTER" port="8510" secure="false"/>
    <service external="false" host="localhost" name="GENESIS_WEBMON" port="8511" secure="false"/>
    <service external="false" host="localhost" name="GENESIS_WEB_ADAPTER" port="8512" secure="false"/>
    <service external="false" host="localhost" name="GCOM_DATA_SERVER" port="8570" secure="false"/>
    <service external="false" host="localhost" name="GCOM_REQUEST_SERVER" port="8571" secure="false"/>
</configuration>
```

If process lives in different server then set the `external` attribute to be "true"
Ex:
```xml
<configuration>
    <service host="hostname" name="GENESIS_CLUSTER" port="8510" external="true"/>
</configuration>
```

If you want to implement SSL for your processes then set the `secure` attribute to be "true" and edit genesis-system-definition.kts file
Ex:
processes.xml
```xml
<configuration>
    <service host="localhost" name="GCOM_REQUEST_SERVER" port="8571" secure="true"/>
</configuration>
```

genesis-system-definition.kts
```kotlin
systemDefinition {
    global {
        item(name = "DefaultKeystoreLocation", value = "/home/exmon/keystore.jks")
        item(name = "DefaultKeystorePassword", value = "Password123")
        item(name = "DefaultCertificate", value = "/home/exmon/certificate.crt")
    }
}
```