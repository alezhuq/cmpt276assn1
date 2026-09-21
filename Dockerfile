FROM maven:3.9.16-eclipse-temurin-25 AS maven_upstream

WORKDIR /workspace

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests


FROM mcr.microsoft.com/openjdk/jdk:25-ubuntu

WORKDIR /app

COPY --from=maven_upstream /workspace/target/demo-0.0.1-SNAPSHOT.jar app.jar

CMD ["java", "-jar", "app.jar"]