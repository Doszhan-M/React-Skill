from rest_framework.generics import (
    CreateAPIView, ListAPIView, RetrieveAPIView, UpdateAPIView,
)
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED



class Test(APIView):
    ''' тест
    '''
    def get(self, request) -> Response:
        return Response('ok', status=HTTP_200_OK)