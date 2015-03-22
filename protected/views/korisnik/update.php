<?php
/* @var $this KorisnikController */
/* @var $model Korisnik */

$this->breadcrumbs=array(
	'Korisniks'=>array('index'),
	$model->idKorisnik=>array('view','id'=>$model->idKorisnik),
	'Update',
);

$this->menu=array(
	array('label'=>'List Korisnik', 'url'=>array('index')),
	array('label'=>'Create Korisnik', 'url'=>array('create')),
	array('label'=>'View Korisnik', 'url'=>array('view', 'id'=>$model->idKorisnik)),
	array('label'=>'Manage Korisnik', 'url'=>array('admin')),
);
?>

<h1>Update Korisnik <?php echo $model->idKorisnik; ?></h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>