FROM maven:3.9.16-eclipse-temurin-17 AS maven_upstream
FROM mcr.microsoft.com/openjdk/jdk:25-ubuntu

RUN apt-get update \
  && apt-get install -y ca-certificates curl git openssh-client --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

ENV MAVEN_HOME=/usr/share/maven
ENV MAVEN_CONFIG=/root/.m2

COPY --from=maven_upstream ${MAVEN_HOME} ${MAVEN_HOME}

RUN ln -s ${MAVEN_HOME}/bin/mvn /usr/bin/mvn

COPY . .

COPY --from=maven_upstream /target/demo-0.0.1-SNAPSHOT.jar app.jar

CMD ["java", "-jar", "app.jar"]