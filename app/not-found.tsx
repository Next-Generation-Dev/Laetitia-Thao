"use client";

import {
  Link,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/react";

export default function NotFound() {
  return (
    <>
      <div className="text-text flex h-full min-h-[calc(100vh-64px-285px)] items-center justify-center">
        <Card className="card-seeqr p-5">
          <CardHeader className="text-text justify-center text-center text-4xl font-bold lg:text-7xl">
            404
          </CardHeader>
          <CardBody className="text-text text-center text-lg">
            La page que vous recherchez n&apos;existe pas.
          </CardBody>
          <CardFooter className="flex justify-center">
            <Button className="button-seeqr">
              <Link href="/">Retourner à l&apos;accueil</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
