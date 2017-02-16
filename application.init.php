<?php
/**
* @package   pagesjaunes_core
* @subpackage
* @author    your name
* @copyright 2011 your name
* @link      http://www.yourwebsite.undefined
* @license    All rights reserved
*/

require(realpath(__DIR__.'/../jelix/lib_1_6_10_dev/jelix/').'/'.'init.php');
require(realpath(__DIR__.'/var/config/').'/'.'var.ini.php');
jApp::initPaths(
    __DIR__.'/',
    __DIR__.'/../www/pagesjaunes/',
    __DIR__.'/var/',
    __DIR__.'/var/log/',
    __DIR__.'/var/config/',
    __DIR__.'/scripts/'
);
jApp::setTempBasePath(realpath(dirname(__FILE__).'/'.'temp/').'/');

// FILE & IMAGE PATH AND FOLDER
define ("MAX_IMAGE_SIZE", 1024*1024) ;

// image and file
define ("CONTENT_IMG_UPLOAD_PATH", "upload/image/content") ;
define ("USER_IMG_UPLOAD_PATH", "upload/image/user") ;

define ("DOC_FILE_UPLOAD_PATH", "upload/doc/file") ;
define ("DOC_IMG_UPLOAD_PATH", "upload/doc/image") ;

define ("IMG_FOLDER_ORIGINAL", "original") ;
define ("IMG_FOLDER_THUMBNAIL", "thumbnail") ;

define ("IMG_FOLDER_200x150_CROP", "200x150crop") ; // thumb visual upload (crop)
define ("IMG_FOLDER_240x340_RESIZE", "240x340resize") ; // thumb visual upload (resize)

// not removable (user in  CUpload.class.php)
define ("MEDIA_FOLDER", "medias") ;

define ("THUMBNAIL_FOLDER", "thumbnail") ;
define ("THUMBNAIL_WIDTH", 200) ;
define ("THUMBNAIL_HEIGHT", 200) ;

define ("MEDIUM_FOLDER", "medium") ;
define ("MEDIUM_WIDTH", 400) ;
define ("MEDIUM_HEIGHT", 400) ;

define ("BIG_FOLDER", "big") ;
define ("BIG_WIDTH", 800) ;
define ("BIG_HEIGHT", 800) ;

define ("IMAGE_QUALITY", 95) ;
// not removable (user in  CUpload.class.php)

define ("PHOTOS_FOLDER", "photos") ;

define ("PHOTOS_THUMBNAIL_FOLDER", "thumbnail") ;

define ("PHOTOS_MEDIUM_FOLDER", "medium") ;

define ("PHOTOS_BIG_FOLDER", "big") ;

define ("IMG_EXT", "jpg,jpeg,gif,tif,png") ;

// photos path
define ("PHOTOS_PATH_AND_FOLDER", "/documents/photos/") ;

// media path
define ("MEDIA_PATH_AND_FOLDER", "medias/") ;
define ("PHOTOS_MEDIA_FOLDER", "medias/") ;
define ("VIDEOS_MEDIA_FOLDER", "videos/") ;

// medias types
define ("MEDIA_TYPE_IMAGE", 1) ;
define ("MEDIA_TYPE_VIDEO", 2) ;
define ("MEDIA_TYPE_DOCUMENT", 3) ;
define ("MEDIA_TYPE_AUDIO", 4) ;

// max media attached
define ("MEDIA_MAX_COUNT", 20) ;

// medias extensions
define ("MEDIA_TYPE_IMAGE_EXT", "jpg,jpeg,png,gif,bmp,tiff,svg") ;
define ("MEDIA_TYPE_VIDEO_EXT", "m4v,mp4,flv,webm") ;
define ("MEDIA_TYPE_DOCUMENT_EXT", "pdf,doc,docx,xls,xlsx,ppt,pptx,txt,csv,rtf,zip,rar,gz,tar") ;
define ("MEDIA_TYPE_AUDIO_EXT", "mp3,m4a,ac3,aiff,mid,ogg,wav") ;


// Content position
define ("LEFT", "left") ;
define ("RIGHT", "right") ;
define ("CENTER", "center") ;

// Payment methods
define ("CASH", "cash");
define ("CHEQUE", "cheque");
define ("MOBILE", "mobile");
define ("PAYPAL", "paypal");